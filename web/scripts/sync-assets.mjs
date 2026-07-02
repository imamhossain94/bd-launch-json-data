// Copies launch photos from the repo-root `launch-image/` folder into
// `public/launch-image/` so Next.js can serve them as static assets.
// Runs automatically before `dev` and `build` (see package.json).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.join(__dirname, "..");
const repoRoot = path.join(webRoot, "..");

const src = path.join(repoRoot, "launch-image");
const dest = path.join(webRoot, "public", "launch-image");

if (!fs.existsSync(src)) {
  console.warn(`[sync-assets] Source folder not found: ${src}`);
  process.exit(0);
}

fs.rmSync(dest, { recursive: true, force: true });
fs.cpSync(src, dest, { recursive: true });

const count = fs.readdirSync(dest).length;
console.log(`[sync-assets] Copied ${count} launch photos to public/launch-image`);
