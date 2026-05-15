import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";
import path from "node:path";

const SRC =
  "C:\\Users\\ARVIN GONZALES\\Downloads\\Velour Product images\\Website images\\Revised images";
const DEST = path.resolve("public/images/site");

// Revised source filename → existing site-image filename it overwrites.
// Keeping the same output names means no page code has to change.
const MAP = [
  ["ChatGPT Image May 15, 2026, 09_21_11 PM.png", "vials-on-desk.jpg"],
  ["ChatGPT Image May 15, 2026, 09_24_24 PM (1).png", "scientist-petri.jpg"],
  ["ChatGPT Image May 15, 2026, 09_24_24 PM (2).png", "vials-counter.jpg"],
  ["ChatGPT Image May 15, 2026, 09_24_24 PM (3).png", "microscope-helix.jpg"],
  ["ChatGPT Image May 15, 2026, 09_24_25 PM (4).png", "bpc-helix.jpg"],
  ["ChatGPT Image May 15, 2026, 09_24_25 PM (5).png", "pipette-dish.jpg"],
  ["ChatGPT Image May 15, 2026, 09_24_25 PM (6).png", "bbg70-stone.jpg"],
  ["ChatGPT Image May 15, 2026, 02_14_21 AM.png", "footer-helix.jpg"],
  ["ChatGPT Image May 15, 2026, 12_04_52 AM.png", "hero-bubbles.jpg"],
  ["ChatGPT Image May 14, 2026, 10_10_04 PM (3).png", "lab-architectural.jpg"],
];

await mkdir(DEST, { recursive: true });

let ok = 0;
for (const [from, to] of MAP) {
  const src = path.join(SRC, from);
  const dst = path.join(DEST, to);
  try {
    await sharp(src).jpeg({ quality: 86, mozjpeg: true }).toFile(dst);
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
console.log(`\n${ok}/${MAP.length} revised images written → ${DEST}`);
