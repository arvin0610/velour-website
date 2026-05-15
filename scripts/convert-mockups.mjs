import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";
import path from "node:path";

const SRC = "C:\\Users\\ARVIN GONZALES\\Downloads\\Velour Product images\\Product Images";
const DEST = path.resolve("public/images/mockups");

// Source ChatGPT filename → destination product mockup filename.
// Mapping established by reading each vial label.
const MAP = [
  ["ChatGPT Image May 15, 2026, 05_27_39 PM (1).png", "bpc-157-5mg.jpg"],
  ["ChatGPT Image May 15, 2026, 05_27_40 PM (2).png", "semaglutide-5mg.jpg"],
  ["ChatGPT Image May 15, 2026, 05_27_41 PM (3).png", "retatrutide-5mg.jpg"],
  ["ChatGPT Image May 15, 2026, 05_27_41 PM (4).png", "ghk-cu-50mg.jpg"],
  ["ChatGPT Image May 15, 2026, 05_27_41 PM (5).png", "cjc-1295-5mg.jpg"],
  ["ChatGPT Image May 15, 2026, 05_27_42 PM (6).png", "tesamorelin-5mg.jpg"],
  ["ChatGPT Image May 15, 2026, 05_27_42 PM (7).png", "ipamorelin-5mg.jpg"],
  ["ChatGPT Image May 15, 2026, 05_27_43 PM (8).png", "bb10-10mg.jpg"],
  ["ChatGPT Image May 15, 2026, 05_27_43 PM (9).png", "tb-500-5mg.jpg"],
  ["ChatGPT Image May 15, 2026, 05_27_44 PM (10).png", "tirzepatide-5mg.jpg"],
  ["ChatGPT Image May 15, 2026, 05_29_01 PM (1).png", "mots-c-5mg.jpg"],
  ["ChatGPT Image May 15, 2026, 05_29_01 PM (2).png", "epitalon-10mg.jpg"],
  ["ChatGPT Image May 15, 2026, 05_29_02 PM (3).png", "pt-141-10mg.jpg"],
  ["ChatGPT Image May 15, 2026, 05_29_02 PM (4).png", "nad-plus-500mg.jpg"],
  ["ChatGPT Image May 15, 2026, 05_29_02 PM (5).png", "bbg70-70mg.jpg"],
  ["ChatGPT Image May 15, 2026, 05_29_03 PM (6).png", "klow-stack-80mg.jpg"],
];

await mkdir(DEST, { recursive: true });

let ok = 0;
for (const [from, to] of MAP) {
  const src = path.join(SRC, from);
  const dst = path.join(DEST, to);
  try {
    await sharp(src)
      .flatten({ background: { r: 245, g: 240, b: 230 } })
      .jpeg({ quality: 88, mozjpeg: true })
      .toFile(dst);
    const s = await stat(dst);
    const meta = await sharp(dst).metadata();
    console.log(
      `✓ ${to.padEnd(24)} ${(s.size / 1024).toFixed(1)} KB  ${meta.width}×${meta.height}`,
    );
    ok++;
  } catch (err) {
    console.error(`✗ ${to.padEnd(24)} FAILED — ${err.message}`);
  }
}
console.log(`\n${ok}/${MAP.length} mockups written → ${DEST}`);
