import { readdir, mkdir, readFile, stat, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const imageDirectory = path.resolve("public/images");
const outputDirectory = path.join(imageDirectory, "optimized");
const manifestPath = path.resolve("src/data/optimized-images.json");
const candidateWidths = [320, 480, 640, 960, 1280, 1920, 2400];
const sourceFiles = [
  "potrait.jpg",
  "picogrid.jpeg",
  "hero-workbench.jpg",
  "quanta-research.png",
  "nea-field.png",
  "hydropower.jpg",
  "agrivoltaics.png",
  "agrivoltaicsiot.jpeg",
  "evmonitor.jpeg",
  "ev-monitor.jpeg",
  "smartstick.webp",
  "Tachometer.png",
  "leadership.jpg",
  "leadership1.jpeg",
  "leadership2.png",
  "leadership4.jpeg"
];
const manifestVersion = 3;

await mkdir(outputDirectory, { recursive: true });

let previousManifest = {};
try {
  previousManifest = JSON.parse(await readFile(manifestPath, "utf8"));
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}

const manifest = { _version: manifestVersion };
const expectedOutputs = new Set();

for (const file of sourceFiles) {
  const sourcePath = path.join(imageDirectory, file);
  const sourceUrl = `/images/${file}`;
  const sourceModified = (await stat(sourcePath)).mtimeMs;
  const previous = previousManifest._version === manifestVersion ? previousManifest[sourceUrl] : null;

  if (previous) {
    const outputUrls = Object.values(previous.variants)
      .flat()
      .map(({ src }) => path.resolve("public", src.replace(/^\//, "")));
    const outputExists = await Promise.all(
      outputUrls.map(async (outputPath) => {
        try {
          return (await stat(outputPath)).mtimeMs >= sourceModified;
        } catch (error) {
          if (error.code === "ENOENT") return false;
          throw error;
        }
      })
    );

    if (outputExists.every(Boolean)) {
      manifest[sourceUrl] = previous;
      outputUrls.forEach((outputPath) => expectedOutputs.add(path.basename(outputPath)));
      continue;
    }
  }

  const metadata = await sharp(sourcePath).metadata();
  const swapsDimensions = [5, 6, 7, 8].includes(metadata.orientation);
  const width = swapsDimensions ? metadata.height : metadata.width;
  const height = swapsDimensions ? metadata.width : metadata.height;

  if (!width || !height) {
    throw new Error(`Could not read image dimensions for ${sourcePath}`);
  }

  const widths = candidateWidths.filter((candidate) => candidate < width);
  if (width <= 2400 && !widths.includes(width)) widths.push(width);
  widths.sort((a, b) => a - b);

  const stem = path.basename(file, path.extname(file)).replace(/[^a-zA-Z0-9_-]/g, "-");
  const variants = { avif: [], webp: [] };

  for (const candidate of widths) {
    const baseName = `${stem}-${candidate}`;
    const outputWidth = Math.min(candidate, width);
    const outputPath = (extension) => path.join(outputDirectory, `${baseName}.${extension}`);
    const resize = () =>
      sharp(sourcePath).rotate().resize({ width: outputWidth, withoutEnlargement: true });

    await resize().avif({ quality: 72, effort: 4 }).toFile(outputPath("avif"));
    await resize().webp({ quality: 84, effort: 4 }).toFile(outputPath("webp"));

    const urlBase = `/images/optimized/${baseName}`;
    variants.avif.push({ width: outputWidth, src: `${urlBase}.avif` });
    variants.webp.push({ width: outputWidth, src: `${urlBase}.webp` });
    for (const extension of ["avif", "webp"]) expectedOutputs.add(`${baseName}.${extension}`);
  }

  manifest[sourceUrl] = { width, height, variants };
}

for (const entry of await readdir(outputDirectory, { withFileTypes: true })) {
  if (entry.isFile() && /\.(avif|webp|jpg)$/.test(entry.name) && !expectedOutputs.has(entry.name)) {
    await unlink(path.join(outputDirectory, entry.name));
  }
}

await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Optimized ${sourceFiles.length} used source images without modifying originals.`);
