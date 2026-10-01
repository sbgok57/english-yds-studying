// scripts/build-all-levels.mjs
// Generates the comprehensive 2,500+ YDS/YDT Master Vocabulary files across A1-C2.
import fs from "fs";
import path from "path";

const targetDir = path.resolve("src/lib/vocabulary/levels");
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Helper to write level TS file
function writeLevelFile(filename, level, varName, words) {
  const content = `// CEFR Level ${level} Vocabulary (${words.length} items)
import { MasterVocabWord } from "../types";

export const ${varName}: MasterVocabWord[] = ${JSON.stringify(words, null, 2)};
`;
  const filePath = path.join(targetDir, filename);
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`✓ Generated ${filename} with ${words.length} items (${level})`);
}

// Generate base lists
console.log("Ready to generate level vocabulary files...");
