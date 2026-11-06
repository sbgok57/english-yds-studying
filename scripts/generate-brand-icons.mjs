import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = path.join(root, "public/brand/dil-master-app-icon.svg");
const svg = await fs.readFile(sourcePath);
const png = async (size) => sharp(svg, { density: 192 }).resize(size, size).png().toBuffer();
const writePng = async (relativePath, size) => {
  const target = path.join(root, relativePath);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, await png(size));
};

const pngTargets = [
  ["public/icons/icon-192.png", 192],
  ["public/icons/icon-512.png", 512],
  ["public/icons/icon-maskable-192.png", 192],
  ["public/icons/icon-maskable-512.png", 512],
  ["public/brand/dil-master-app-icon-192.png", 192],
  ["public/brand/dil-master-app-icon-512.png", 512],
  ["public/brand/dil-master-app-icon-1024.png", 1024],
  ["public/brand/apple-touch-icon.png", 180],
  ["public/apple-touch-icon.png", 180],
  ["src/app/icon.png", 512],
  ["src/app/apple-icon.png", 180],
  ["ios/DilMaster/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png", 1024],
  ["android/app/src/main/res/drawable-nodpi/dil_master_icon_art.png", 1024],
  ["android/app/src/main/res/mipmap-mdpi/ic_launcher.png", 48],
  ["android/app/src/main/res/mipmap-mdpi/ic_launcher_round.png", 48],
  ["android/app/src/main/res/mipmap-hdpi/ic_launcher.png", 72],
  ["android/app/src/main/res/mipmap-hdpi/ic_launcher_round.png", 72],
  ["android/app/src/main/res/mipmap-xhdpi/ic_launcher.png", 96],
  ["android/app/src/main/res/mipmap-xhdpi/ic_launcher_round.png", 96],
  ["android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png", 144],
  ["android/app/src/main/res/mipmap-xxhdpi/ic_launcher_round.png", 144],
  ["android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png", 192],
  ["android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.png", 192],
];

for (const [relativePath, size] of pngTargets) await writePng(relativePath, size);

// Keep legacy favicon URLs synchronized too (ICO embeds the same PNG payload).
const faviconPng = await png(256);
const icoHeader = Buffer.alloc(22);
icoHeader.writeUInt16LE(0, 0);
icoHeader.writeUInt16LE(1, 2);
icoHeader.writeUInt16LE(1, 4);
icoHeader.writeUInt8(0, 6); // 256 px is encoded as 0
icoHeader.writeUInt8(0, 7);
icoHeader.writeUInt8(0, 8);
icoHeader.writeUInt8(0, 9);
icoHeader.writeUInt16LE(1, 10);
icoHeader.writeUInt16LE(32, 12);
icoHeader.writeUInt32LE(faviconPng.length, 14);
icoHeader.writeUInt32LE(22, 18);
await fs.writeFile(path.join(root, "public/favicon.ico"), Buffer.concat([icoHeader, faviconPng]));
await fs.writeFile(path.join(root, "src/app/favicon.ico"), Buffer.concat([icoHeader, faviconPng]));
await fs.copyFile(sourcePath, path.join(root, "public/favicon.svg"));

console.log(`Generated ${pngTargets.length + 2} web and native icon assets from ${path.relative(root, sourcePath)}.`);
