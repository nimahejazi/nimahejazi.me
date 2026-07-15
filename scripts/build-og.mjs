import sharp from "sharp";
import { readFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const pub = join(root, "public");

const DARK = "#171513";
const ACCENT = "#e2552e";
const LIGHT = "#f5f2ee";
const MUTED = "#b9b2a9";
const W = 1200;
const H = 630;

function bg() {
  return Buffer.from(
    `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
       <rect width="${W}" height="${H}" fill="${DARK}"/>
       <rect x="0" y="0" width="14" height="${H}" fill="${ACCENT}"/>
     </svg>`
  );
}

function textSvg(lines) {
  const items = lines
    .map(
      (l) =>
        `<text x="${l.x}" y="${l.y}" font-family="${l.font}" font-size="${l.size}" font-weight="${l.weight}" fill="${l.fill}" ${l.spacing ? `letter-spacing="${l.spacing}"` : ""}>${l.text}</text>`
    )
    .join("");
  return Buffer.from(
    `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">${items}</svg>`
  );
}

const essayCard = textSvg([
  { x: 80, y: 130, text: "BLOG", font: "Helvetica, Arial, sans-serif", size: 28, weight: 700, fill: ACCENT, spacing: 6 },
  { x: 80, y: 250, text: "Is Vibe Coding", font: "Helvetica, Arial, sans-serif", size: 76, weight: 700, fill: LIGHT },
  { x: 80, y: 330, text: "Enough?", font: "Helvetica, Arial, sans-serif", size: 76, weight: 700, fill: LIGHT },
  { x: 80, y: 400, text: "Building and maintaining software with AI.", font: "Helvetica, Arial, sans-serif", size: 30, weight: 400, fill: MUTED },
  { x: 80, y: 560, text: "nimahejazi.me", font: "'JetBrains Mono', monospace", size: 28, weight: 500, fill: LIGHT },
]);

const fallbackCard = textSvg([
  { x: 92, y: 250, text: "Nima Hejazi", font: "Helvetica, Arial, sans-serif", size: 84, weight: 700, fill: LIGHT },
  { x: 94, y: 320, text: "Business Analyst + Agentic AI", font: "Helvetica, Arial, sans-serif", size: 34, weight: 600, fill: ACCENT },
  { x: 94, y: 560, text: "nimahejazi.me", font: "'JetBrains Mono', monospace", size: 28, weight: 500, fill: MUTED },
]);

async function renderCartoonCard() {
  const cartoon = await sharp(join(pub, "images/vibe-coding-confused.jpg"))
    .resize(600, 600)
    .png()
    .toBuffer();
  await sharp(bg())
    .composite([
      { input: cartoon, left: 580, top: 15 },
      { input: essayCard, left: 0, top: 0 },
    ])
    .png()
    .toFile(join(pub, "og", "vibe-coding-enough.png"));
  console.log("wrote public/og/vibe-coding-enough.png");
}

async function renderFallback() {
  await sharp(bg())
    .composite([{ input: fallbackCard, left: 0, top: 0 }])
    .png()
    .toFile(join(pub, "og-image.png"));
  console.log("wrote public/og-image.png (fixed fallback)");
}

await mkdir(join(pub, "og"), { recursive: true });
await renderCartoonCard();
await renderFallback();
