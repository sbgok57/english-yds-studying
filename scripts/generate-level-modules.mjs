// scripts/generate-level-modules.mjs
// Modular generator for 2500+ YDS/YDT academic vocabulary items across CEFR A1-C2.
import fs from "fs";
import path from "path";

const targetDir = path.resolve("src/lib/vocabulary/levels");
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

console.log("Generating modular CEFR vocabulary datasets in:", targetDir);
