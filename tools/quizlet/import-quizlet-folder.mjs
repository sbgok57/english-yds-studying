#!/usr/bin/env node

/**
 * @fileoverview
 * Imports user-authorized Quizlet exports into a canonical vocabulary JSON file.
 *
 * The importer:
 * - Reads strict UTF-8
 * - Preserves English and Turkish characters
 * - Rejects corrupted or ambiguous records
 * - Never translates or paraphrases content
 * - Never removes duplicate cards
 * - Verifies expected set and card counts
 * - Separates visible vocabulary from internal identifiers
 *
 * Usage:
 * node tools/quizlet/import-quizlet-folder.mjs \
 *   --manifest quizlet.manifest.json
 */

import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import {
  mkdir,
  readFile,
  rename,
  rm,
  writeFile,
} from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { TextDecoder } from "node:util";

const UTF8_DECODER = new TextDecoder("utf-8", {
  fatal: true,
});

const ALLOWED_COLUMN_NAMES = new Set([
  "term",
  "definitionEn",
  "meaningTr",
  "combinedDefinition",
]);

const REQUIRED_OUTPUT_FIELDS = [
  "term",
  "definitionEn",
  "meaningTr",
];

/**
 * Creates a SHA-256 checksum.
 *
 * @param {string|Buffer} value - Input value.
 * @returns {string} Hexadecimal checksum.
 */
function createChecksum(value) {
  return createHash("sha256").update(value).digest("hex");
}

/**
 * Returns a named command-line argument.
 *
 * @param {string} argumentName - Argument such as "--manifest".
 * @returns {string|null} Argument value or null.
 */
function getNamedArgument(argumentName) {
  const argumentIndex = process.argv.indexOf(argumentName);

  if (argumentIndex === -1) {
    return null;
  }

  return process.argv[argumentIndex + 1] ?? null;
}

/**
 * Checks whether a value is a plain object.
 *
 * @param {unknown} value - Value to inspect.
 * @returns {boolean} Whether the value is a plain object.
 */
function isPlainObject(value) {
  return (
    typeof value === "object"
    && value !== null
    && !Array.isArray(value)
  );
}

/**
 * Requires a plain object.
 *
 * @param {unknown} value - Value to validate.
 * @param {string} label - Error label.
 */
function requireObject(value, label) {
  if (!isPlainObject(value)) {
    throw new TypeError(`${label} must be an object.`);
  }
}

/**
 * Requires a non-empty string.
 *
 * @param {unknown} value - Value to validate.
 * @param {string} label - Error label.
 */
function requireString(value, label) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new TypeError(`${label} must be a non-empty string.`);
  }
}

/**
 * Requires a positive integer.
 *
 * @param {unknown} value - Value to validate.
 * @param {string} label - Error label.
 */
function requirePositiveInteger(value, label) {
  if (!Number.isInteger(value) || value < 1) {
    throw new TypeError(`${label} must be a positive integer.`);
  }
}

/**
 * Validates a Quizlet URL used as provenance metadata.
 *
 * @param {string} value - URL to validate.
 * @param {string} label - Error label.
 */
function requireQuizletUrl(value, label) {
  requireString(value, label);

  let parsedUrl;

  try {
    parsedUrl = new URL(value);
  } catch {
    throw new TypeError(`${label} must be a valid URL.`);
  }

  const hostname = parsedUrl.hostname.toLowerCase();

  if (
    hostname !== "quizlet.com"
    && !hostname.endsWith(".quizlet.com")
  ) {
    throw new TypeError(`${label} must use the quizlet.com domain.`);
  }
}

/**
 * Removes a UTF-8 byte order mark from the beginning of text.
 *
 * @param {string} value - Decoded text.
 * @returns {string} Text without the initial BOM.
 */
function removeInitialByteOrderMark(value) {
  return value.startsWith("\uFEFF") ? value.slice(1) : value;
}

/**
 * Normalizes line endings without modifying language content.
 *
 * @param {string} value - Input text.
 * @returns {string} Text with LF line endings.
 */
function normalizeLineEndings(value) {
  return value.replace(/\r\n?/g, "\n");
}

/**
 * Decodes configured separator escape sequences.
 *
 * @param {string} value - Configured separator.
 * @param {string} label - Error label.
 * @returns {string} Decoded separator.
 */
function decodeSeparator(value, label) {
  requireString(value, label);

  const decodedValue = value
    .replaceAll("\\r", "\r")
    .replaceAll("\\n", "\n")
    .replaceAll("\\t", "\t");

  if (decodedValue.length === 0) {
    throw new Error(`${label} cannot be empty.`);
  }

  return normalizeLineEndings(decodedValue);
}

/**
 * Reads a file using fatal UTF-8 decoding.
 *
 * Invalid UTF-8 causes an error rather than silent replacement.
 *
 * @param {string} filePath - Absolute file path.
 * @returns {Promise<{buffer: Buffer, text: string}>} File data.
 */
async function readStrictUtf8File(filePath) {
  const fileBuffer = await readFile(filePath);
  let decodedText;

  try {
    decodedText = UTF8_DECODER.decode(fileBuffer);
  } catch {
    throw new Error(
      `Invalid UTF-8 encoding detected in: ${filePath}`,
    );
  }

  const cleanText = normalizeLineEndings(
    removeInitialByteOrderMark(decodedText),
  );

  if (cleanText.includes("\uFFFD")) {
    throw new Error(
      `Unicode replacement character detected in: ${filePath}`,
    );
  }

  return {
    buffer: fileBuffer,
    text: cleanText,
  };
}

/**
 * Parses JSON using strict UTF-8 decoding.
 *
 * @param {string} filePath - JSON file path.
 * @returns {Promise<unknown>} Parsed JSON value.
 */
async function readJsonFile(filePath) {
  const { text } = await readStrictUtf8File(filePath);

  try {
    return JSON.parse(text);
  } catch (error) {
    throw new Error(
      `Invalid JSON in ${filePath}: ${error.message}`,
    );
  }
}

/**
 * Validates the import manifest.
 *
 * @param {unknown} manifest - Parsed manifest.
 */
function validateManifest(manifest) {
  requireObject(manifest, "Manifest");

  if (manifest.schemaVersion !== 1) {
    throw new Error("manifest.schemaVersion must be 1.");
  }

  requireObject(manifest.folder, "manifest.folder");
  requireString(manifest.folder.id, "manifest.folder.id");
  requireString(manifest.folder.title, "manifest.folder.title");
  requireQuizletUrl(
    manifest.folder.quizletUrl,
    "manifest.folder.quizletUrl",
  );

  requirePositiveInteger(
    manifest.folder.expectedSetCount,
    "manifest.folder.expectedSetCount",
  );

  requirePositiveInteger(
    manifest.folder.expectedTotalCardCount,
    "manifest.folder.expectedTotalCardCount",
  );

  requireString(manifest.outputFile, "manifest.outputFile");
  requireString(manifest.reportFile, "manifest.reportFile");

  if (!Array.isArray(manifest.sets) || manifest.sets.length === 0) {
    throw new Error("manifest.sets must be a non-empty array.");
  }

  if (manifest.sets.length !== manifest.folder.expectedSetCount) {
    throw new Error(
      "Manifest set count does not match folder.expectedSetCount. "
      + `Expected ${manifest.folder.expectedSetCount}, `
      + `received ${manifest.sets.length}.`,
    );
  }

  const setIdentifiers = new Set();
  let expectedTotal = 0;

  manifest.sets.forEach((setConfiguration, setIndex) => {
    const label = `manifest.sets[${setIndex}]`;

    requireObject(setConfiguration, label);
    requireString(setConfiguration.id, `${label}.id`);
    requireString(setConfiguration.title, `${label}.title`);
    requireQuizletUrl(
      setConfiguration.quizletUrl,
      `${label}.quizletUrl`,
    );
    requireString(
      setConfiguration.sourceFile,
      `${label}.sourceFile`,
    );
    requirePositiveInteger(
      setConfiguration.expectedCardCount,
      `${label}.expectedCardCount`,
    );
    requireObject(setConfiguration.format, `${label}.format`);

    if (setIdentifiers.has(setConfiguration.id)) {
      throw new Error(
        `Duplicate set ID detected: ${setConfiguration.id}`,
      );
    }

    setIdentifiers.add(setConfiguration.id);
    expectedTotal += setConfiguration.expectedCardCount;

    const format = setConfiguration.format;

    decodeSeparator(
      format.fieldSeparator ?? "\\t",
      `${label}.format.fieldSeparator`,
    );

    decodeSeparator(
      format.rowSeparator ?? "\\n",
      `${label}.format.rowSeparator`,
    );

    if (
      !Array.isArray(format.columns)
      || format.columns.length < 2
    ) {
      throw new Error(
        `${label}.format.columns must contain at least two columns.`,
      );
    }

    const repeatedColumns = new Set();

    format.columns.forEach((columnName) => {
      if (!ALLOWED_COLUMN_NAMES.has(columnName)) {
        throw new Error(
          `Unsupported column "${columnName}" in ${label}.`,
        );
      }

      if (repeatedColumns.has(columnName)) {
        throw new Error(
          `Repeated column "${columnName}" in ${label}.`,
        );
      }

      repeatedColumns.add(columnName);
    });

    const usesCombinedDefinition = format.columns.includes(
      "combinedDefinition",
    );

    if (usesCombinedDefinition) {
      requireObject(
        format.combinedDefinition,
        `${label}.format.combinedDefinition`,
      );

      decodeSeparator(
        format.combinedDefinition.separator,
        `${label}.format.combinedDefinition.separator`,
      );

      const targets = format.combinedDefinition.targets;

      if (
        !Array.isArray(targets)
        || targets.length !== 2
        || targets[0] !== "definitionEn"
        || targets[1] !== "meaningTr"
      ) {
        throw new Error(
          `${label}.format.combinedDefinition.targets must be `
          + `["definitionEn", "meaningTr"].`,
        );
      }

      if (!format.columns.includes("term")) {
        throw new Error(`${label} must contain the term column.`);
      }

      return;
    }

    REQUIRED_OUTPUT_FIELDS.forEach((requiredField) => {
      if (!format.columns.includes(requiredField)) {
        throw new Error(
          `${label}.format.columns is missing "${requiredField}".`,
        );
      }
    });
  });

  if (expectedTotal !== manifest.folder.expectedTotalCardCount) {
    throw new Error(
      "The sum of expectedCardCount values does not match "
      + "folder.expectedTotalCardCount. "
      + `Expected ${manifest.folder.expectedTotalCardCount}, `
      + `received ${expectedTotal}.`,
    );
  }
}

/**
 * Parses character-delimited content.
 *
 * Quoting is disabled unless quoteCharacter is configured. This preserves
 * ordinary quote characters inside English definitions.
 *
 * @param {string} text - Source text.
 * @param {object} options - Parser options.
 * @param {string} options.fieldSeparator - Field separator.
 * @param {string} options.rowSeparator - Row separator.
 * @param {string|null} options.quoteCharacter - Optional quote character.
 * @returns {string[][]} Parsed rows.
 */
function parseDelimitedText(
  text,
  {
    fieldSeparator,
    rowSeparator,
    quoteCharacter = null,
  },
) {
  if (fieldSeparator === rowSeparator) {
    throw new Error(
      "Field separator and row separator cannot be identical.",
    );
  }

  const rows = [];
  let currentRow = [];
  let currentField = "";
  let characterIndex = 0;
  let insideQuotes = false;

  while (characterIndex < text.length) {
    const currentCharacter = text[characterIndex];

    if (
      quoteCharacter
      && currentCharacter === quoteCharacter
    ) {
      if (insideQuotes) {
        const nextCharacter = text[characterIndex + 1];

        if (nextCharacter === quoteCharacter) {
          currentField += quoteCharacter;
          characterIndex += 2;
          continue;
        }

        insideQuotes = false;
        characterIndex += 1;
        continue;
      }

      if (currentField.length === 0) {
        insideQuotes = true;
        characterIndex += 1;
        continue;
      }

      currentField += currentCharacter;
      characterIndex += 1;
      continue;
    }

    if (
      !insideQuotes
      && text.startsWith(fieldSeparator, characterIndex)
    ) {
      currentRow.push(currentField);
      currentField = "";
      characterIndex += fieldSeparator.length;
      continue;
    }

    if (
      !insideQuotes
      && text.startsWith(rowSeparator, characterIndex)
    ) {
      currentRow.push(currentField);
      rows.push(currentRow);
      currentRow = [];
      currentField = "";
      characterIndex += rowSeparator.length;
      continue;
    }

    currentField += currentCharacter;
    characterIndex += 1;
  }

  if (insideQuotes) {
    throw new Error("Source contains an unclosed quoted field.");
  }

  if (currentField.length > 0 || currentRow.length > 0) {
    currentRow.push(currentField);
    rows.push(currentRow);
  }

  return rows;
}

/**
 * Validates and normalizes one vocabulary field.
 *
 * @param {string} value - Source value.
 * @param {string} label - Field label.
 * @param {boolean} trimOuterWhitespace - Whether to trim outer whitespace.
 * @returns {string} Validated field.
 */
function normalizeVocabularyField(
  value,
  label,
  trimOuterWhitespace,
) {
  let normalizedValue = normalizeLineEndings(value).normalize("NFC");

  if (trimOuterWhitespace) {
    normalizedValue = normalizedValue.trim();
  }

  if (normalizedValue.length === 0) {
    throw new Error(`${label} cannot be empty.`);
  }

  if (normalizedValue.includes("\uFFFD")) {
    throw new Error(
      `${label} contains the Unicode replacement character.`,
    );
  }

  const forbiddenControlCharacter =
    /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/u;

  if (forbiddenControlCharacter.test(normalizedValue)) {
    throw new Error(
      `${label} contains a forbidden control character.`,
    );
  }

  const hiddenCharacterPattern =
    /[\u200B\u200C\u200D\u2060\uFEFF]/u;

  if (hiddenCharacterPattern.test(normalizedValue)) {
    throw new Error(
      `${label} contains a hidden or zero-width character.`,
    );
  }

  return normalizedValue;
}

/**
 * Maps one parsed row to canonical fields.
 *
 * @param {string[]} row - Parsed row.
 * @param {object} format - Set format configuration.
 * @param {string} context - Source context.
 * @returns {{term: string, definitionEn: string, meaningTr: string}}
 */
function mapRowToCanonicalFields(row, format, context) {
  if (row.length !== format.columns.length) {
    throw new Error(
      `${context} has ${row.length} columns; `
      + `${format.columns.length} columns were expected.`,
    );
  }

  const sourceFields = Object.fromEntries(
    format.columns.map((columnName, columnIndex) => [
      columnName,
      row[columnIndex],
    ]),
  );

  const trimOuterWhitespace =
    format.trimOuterWhitespace !== false;

  if (format.columns.includes("combinedDefinition")) {
    const combinedSeparator = decodeSeparator(
      format.combinedDefinition.separator,
      `${context}.combinedDefinition.separator`,
    );

    const definitionParts =
      sourceFields.combinedDefinition.split(combinedSeparator);

    if (definitionParts.length !== 2) {
      throw new Error(
        `${context} must contain exactly one combined-definition `
        + `separator "${format.combinedDefinition.separator}". `
        + `Detected ${Math.max(definitionParts.length - 1, 0)}.`,
      );
    }

    return {
      term: normalizeVocabularyField(
        sourceFields.term,
        `${context}.term`,
        trimOuterWhitespace,
      ),
      definitionEn: normalizeVocabularyField(
        definitionParts[0],
        `${context}.definitionEn`,
        trimOuterWhitespace,
      ),
      meaningTr: normalizeVocabularyField(
        definitionParts[1],
        `${context}.meaningTr`,
        trimOuterWhitespace,
      ),
    };
  }

  return {
    term: normalizeVocabularyField(
      sourceFields.term,
      `${context}.term`,
      trimOuterWhitespace,
    ),
    definitionEn: normalizeVocabularyField(
      sourceFields.definitionEn,
      `${context}.definitionEn`,
      trimOuterWhitespace,
    ),
    meaningTr: normalizeVocabularyField(
      sourceFields.meaningTr,
      `${context}.meaningTr`,
      trimOuterWhitespace,
    ),
  };
}

/**
 * Finds duplicate terms without removing them.
 *
 * @param {Array<{id: string, term: string}>} cards - Canonical cards.
 * @returns {Array<{term: string, cardIds: string[]}>} Duplicate report.
 */
function findDuplicateTerms(cards) {
  const occurrenceMap = new Map();

  cards.forEach((card) => {
    const comparisonKey = card.term
      .normalize("NFC")
      .toLocaleLowerCase("en-US");

    const currentValue = occurrenceMap.get(comparisonKey) ?? {
      term: card.term,
      cardIds: [],
    };

    currentValue.cardIds.push(card.id);
    occurrenceMap.set(comparisonKey, currentValue);
  });

  return [...occurrenceMap.values()].filter(
    (entry) => entry.cardIds.length > 1,
  );
}

/**
 * Detects possible HTML entities without modifying them.
 *
 * @param {Array<{id: string, term: string, definitionEn: string, meaningTr: string}>} cards
 * @returns {Array<{cardId: string, field: string}>} Warnings.
 */
function findPossibleHtmlEntities(cards) {
  const warnings = [];
  const entityPattern =
    /&(?:amp|lt|gt|quot|apos|#\d+|#x[\da-f]+);/iu;

  cards.forEach((card) => {
    ["term", "definitionEn", "meaningTr"].forEach((fieldName) => {
      if (entityPattern.test(card[fieldName])) {
        warnings.push({
          cardId: card.id,
          field: fieldName,
        });
      }
    });
  });

  return warnings;
}

/**
 * Imports one configured vocabulary set.
 *
 * @param {object} setConfiguration - Set manifest configuration.
 * @param {string} manifestDirectory - Manifest directory.
 * @returns {Promise<object>} Imported set and report details.
 */
async function importSet(setConfiguration, manifestDirectory) {
  const sourcePath = path.resolve(
    manifestDirectory,
    setConfiguration.sourceFile,
  );

  const { buffer, text } = await readStrictUtf8File(sourcePath);
  const format = setConfiguration.format;

  const fieldSeparator = decodeSeparator(
    format.fieldSeparator ?? "\\t",
    `${setConfiguration.id}.fieldSeparator`,
  );

  const rowSeparator = decodeSeparator(
    format.rowSeparator ?? "\\n",
    `${setConfiguration.id}.rowSeparator`,
  );

  const quoteCharacter =
    typeof format.quoteCharacter === "string"
      ? format.quoteCharacter
      : null;

  const rows = parseDelimitedText(text, {
    fieldSeparator,
    rowSeparator,
    quoteCharacter,
  });

  rows.forEach((row, rowIndex) => {
    const containsOnlyWhitespace = row.every(
      (fieldValue) => fieldValue.trim() === "",
    );

    if (containsOnlyWhitespace) {
      throw new Error(
        `${setConfiguration.sourceFile}, row ${rowIndex + 1} `
        + "is blank. Blank source rows are not allowed.",
      );
    }
  });

  if (rows.length !== setConfiguration.expectedCardCount) {
    throw new Error(
      `${setConfiguration.id} expected `
      + `${setConfiguration.expectedCardCount} cards but parsed `
      + `${rows.length} rows.`,
    );
  }

  const cards = rows.map((row, rowIndex) => {
    const order = rowIndex + 1;
    const context =
      `${setConfiguration.sourceFile}:row-${order}`;

    const canonicalFields = mapRowToCanonicalFields(
      row,
      format,
      context,
    );

    const cardId =
      `${setConfiguration.id}-${String(order).padStart(4, "0")}`;

    const sourceRowChecksum = createChecksum(
      row.join("\u241F"),
    );

    const integrityHash = createChecksum(
      JSON.stringify([
        canonicalFields.term,
        canonicalFields.definitionEn,
        canonicalFields.meaningTr,
      ]),
    );

    return {
      id: cardId,
      order,
      ...canonicalFields,
      sourceSetId: setConfiguration.id,
      sourceRow: order,
      sourceRowChecksum,
      integrityHash,
    };
  });

  const duplicateTerms = findDuplicateTerms(cards);
  const possibleHtmlEntities = findPossibleHtmlEntities(cards);

  return {
    data: {
      id: setConfiguration.id,
      title: setConfiguration.title,
      quizletUrl: setConfiguration.quizletUrl,
      sourceFile: setConfiguration.sourceFile,
      sourceChecksum: createChecksum(buffer),
      cardCount: cards.length,
      cards,
    },
    report: {
      setId: setConfiguration.id,
      expectedCardCount: setConfiguration.expectedCardCount,
      importedCardCount: cards.length,
      duplicateTerms,
      possibleHtmlEntities,
    },
  };
}

/**
 * Writes JSON using an atomic temporary file.
 *
 * @param {string} targetPath - Destination path.
 * @param {unknown} value - Serializable value.
 */
async function writeJsonAtomically(targetPath, value) {
  await mkdir(path.dirname(targetPath), {
    recursive: true,
  });

  const temporaryPath =
    `${targetPath}.${process.pid}.temporary`;

  const serializedValue =
    `${JSON.stringify(value, null, 2)}\n`;

  await writeFile(temporaryPath, serializedValue, {
    encoding: "utf8",
  });

  await rm(targetPath, {
    force: true,
  });

  await rename(temporaryPath, targetPath);
}

/**
 * Runs the importer.
 */
async function main() {
  const manifestArgument = getNamedArgument("--manifest");

  if (!manifestArgument) {
    throw new Error(
      "Missing --manifest argument.\n"
      + "Usage: node import-quizlet-folder.mjs "
      + "--manifest quizlet.manifest.json",
    );
  }

  const manifestPath = path.resolve(
    process.cwd(),
    manifestArgument,
  );

  const manifestDirectory = path.dirname(manifestPath);
  const manifest = await readJsonFile(manifestPath);

  validateManifest(manifest);

  const importedSets = [];
  const setReports = [];

  for (const setConfiguration of manifest.sets) {
    const importedSet = await importSet(
      setConfiguration,
      manifestDirectory,
    );

    importedSets.push(importedSet.data);
    setReports.push(importedSet.report);
  }

  const totalCardCount = importedSets.reduce(
    (currentTotal, currentSet) =>
      currentTotal + currentSet.cardCount,
    0,
  );

  if (
    totalCardCount
    !== manifest.folder.expectedTotalCardCount
  ) {
    throw new Error(
      "Final card count mismatch. "
      + `Expected ${manifest.folder.expectedTotalCardCount}, `
      + `received ${totalCardCount}.`,
    );
  }

  const canonicalOutput = {
    schemaVersion: 1,
    generatedAt: new Date().toISOString(),
    sourceType: "user-authorized-quizlet-export",
    sourcePolicy: "links-are-provenance-only",
    folder: {
      id: manifest.folder.id,
      title: manifest.folder.title,
      quizletUrl: manifest.folder.quizletUrl,
    },
    totals: {
      setCount: importedSets.length,
      cardCount: totalCardCount,
    },
    sets: importedSets,
  };

  const outputPath = path.resolve(
    manifestDirectory,
    manifest.outputFile,
  );

  await writeJsonAtomically(
    outputPath,
    canonicalOutput,
  );

  // Read the result back from disk and verify it.
  const persistedOutput = await readJsonFile(outputPath);

  assert.deepStrictEqual(
    persistedOutput.sets,
    canonicalOutput.sets,
    "Persisted set data does not match imported set data.",
  );

  assert.equal(
    persistedOutput.totals.cardCount,
    manifest.folder.expectedTotalCardCount,
    "Persisted total card count is incorrect.",
  );

  const allCards = persistedOutput.sets.flatMap(
    (currentSet) => currentSet.cards,
  );

  assert.equal(
    allCards.length,
    manifest.folder.expectedTotalCardCount,
    "Flattened card count is incorrect.",
  );

  const allIdentifiers = new Set(
    allCards.map((card) => card.id),
  );

  assert.equal(
    allIdentifiers.size,
    allCards.length,
    "Duplicate internal card IDs were generated.",
  );

  const report = {
    result: "PASS",
    generatedAt: new Date().toISOString(),
    manifestFile: path.basename(manifestPath),
    outputFile: manifest.outputFile,
    encoding: "UTF-8 verified",
    folder: {
      expectedSetCount: manifest.folder.expectedSetCount,
      importedSetCount: importedSets.length,
      expectedTotalCardCount:
        manifest.folder.expectedTotalCardCount,
      importedTotalCardCount: totalCardCount,
    },
    sets: setReports,
    integrity: {
      invalidUtf8Files: 0,
      replacementCharacters: 0,
      hiddenCharacters: 0,
      removedDuplicates: 0,
      generatedIdentifiersDisplayedAsTerms: false,
      persistedDataVerified: true,
    },
  };

  const reportPath = path.resolve(
    manifestDirectory,
    manifest.reportFile,
  );

  await writeJsonAtomically(reportPath, report);

  console.info("QUIZLET IMPORT RESULT: PASS");
  console.info(`Sets imported: ${importedSets.length}`);
  console.info(`Cards imported: ${totalCardCount}`);
  console.info(`Canonical output: ${outputPath}`);
  console.info(`Integrity report: ${reportPath}`);
}

main().catch((error) => {
  console.error("QUIZLET IMPORT RESULT: FAIL");
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
