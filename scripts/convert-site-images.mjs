import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";
import path from "node:path";

const SRC = "C:\\Users\\ARVIN GONZALES\\Downloads\\Velour Product images\\Website images";
const DEST = path.resolve("public/images/site");

const MAP = [
  ["ChatGPT Image May 14, 2026, 10_01_05 PM (10).png", "vials-on-desk.jpg"],
  ["ChatGPT Image May 14, 2026, 10_10_04 PM (3).png", "lab-architectural.jpg"],
  ["ChatGPT Image May 14, 2026, 10_01_32 PM (1).png", "scientist-portrait.jpg"],
  ["ChatGPT Image May 14, 2026, 10_01_04 PM (9).png", "vials-syringe.jpg"],
  ["ChatGPT Image May 14, 2026, 10_01_01 PM (4).png", "scientist-wide.jpg"],
  ["ChatGPT Image May 14, 2026, 10_01_35 PM (4).png", "scientist-petri.jpg"],
  ["ChatGPT Image May 14, 2026, 10_01_40 PM (9).png", "vials-hplc.jpg"],
  ["ChatGPT Image May 14, 2026, 10_10_04 PM (4).png", "microscope-helix.jpg"],
  ["ChatGPT Image May 14, 2026, 10_01_38 PM (5).png", "vials-counter.jpg"],
  ["ChatGPT Image May 14, 2026, 11_21_42 PM (6).png", "pipette-dish.jpg"],
  ["ChatGPT Image May 14, 2026, 11_21_41 PM (5).png", "vial-ledger.jpg"],
  ["ChatGPT Image May 14, 2026, 11_21_38 PM (2).png", "bpc-helix.jpg"],
  ["ChatGPT Image May 14, 2026, 11_21_43 PM (8).png", "bbg70-stone.jpg"],
  ["ChatGPT Image May 15, 2026, 12_04_52 AM.png", "hero-bubbles.jpg"],
];

await mkdir(DEST, { recursive: true });

for (const [from, to] of MAP) {
  const src = path.join(SRC, from);
  const dst = path.join(DEST, to);
  await sharp(src)
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(dst);
  const s = await stat(dst);
  const meta = await sharp(dst).metadata();
  console.log(
    `✓ ${to.padEnd(28)} ${(s.size / 1024).toFixed(1)} KB  ${meta.width}×${meta.height}`,
  );
}
console.log(`\n${MAP.length} files converted → ${DEST}`);
