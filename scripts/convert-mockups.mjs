import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";
import path from "node:path";

const SRC = "C:\\Users\\ARVIN GONZALES\\Downloads\\Velour Product images\\Product Images";
const DEST = path.resolve("public/images/mockups");

const MAP = [
  ["ChatGPT Image May 14, 2026, 09_51_45 PM (1).png", "bb10-10mg.jpg"],
  ["ChatGPT Image May 14, 2026, 09_51_46 PM (2).png", "bbg70-70mg.jpg"],
  ["ChatGPT Image May 14, 2026, 09_51_46 PM (3).png", "bpc-157-5mg.jpg"],
  ["ChatGPT Image May 14, 2026, 09_51_46 PM (4).png", "cjc-1295-5mg.jpg"],
  ["ChatGPT Image May 14, 2026, 09_51_47 PM (5).png", "epitalon-10mg.jpg"],
  ["ChatGPT Image May 14, 2026, 09_51_47 PM (6).png", "ghk-cu-50mg.jpg"],
  ["ChatGPT Image May 14, 2026, 09_51_48 PM (7).png", "ipamorelin-5mg.jpg"],
  ["ChatGPT Image May 14, 2026, 09_51_49 PM (8).png", "klow-stack-80mg.jpg"],
  ["ChatGPT Image May 14, 2026, 09_51_51 PM (9).png", "mots-c-5mg.jpg"],
  ["ChatGPT Image May 14, 2026, 09_51_51 PM (10).png", "nad-plus-500mg.jpg"],
  ["ChatGPT Image May 14, 2026, 09_53_50 PM (1).png", "pt-141-10mg.jpg"],
  ["ChatGPT Image May 14, 2026, 09_53_51 PM (2).png", "tb-500-5mg.jpg"],
  ["ChatGPT Image May 14, 2026, 09_53_51 PM (4).png", "tirzepatide-5mg.jpg"],
];

await mkdir(DEST, { recursive: true });

for (const [from, to] of MAP) {
  const src = path.join(SRC, from);
  const dst = path.join(DEST, to);
  await sharp(src)
    .flatten({ background: { r: 245, g: 240, b: 230 } })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(dst);
  const s = await stat(dst);
  console.log(`✓ ${to.padEnd(28)} ${(s.size / 1024).toFixed(1)} KB`);
}
console.log(`\n${MAP.length} files converted → ${DEST}`);
