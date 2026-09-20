import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

// Reuse the site's Korean-capable font for deterministic, offline OG rendering.
let fontData: Promise<Buffer> | undefined;
export default async function loadLocalFonts() {
  fontData ??= readFile(resolve("public/fonts/ZEN-SERIF-TTF-Regular.ttf"));
  const data = await fontData;
  return [
    { name: "Zen Serif", data, weight: 400 as const, style: "normal" as const },
  ];
}
