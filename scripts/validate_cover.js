#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const os = require("os");
const { createRequire } = require("module");

function usage() {
  console.error("Usage: node scripts/validate_cover.js input.svg output.png [--template]");
}

function parseArgs(argv) {
  const args = argv.slice(2);
  const svg = args[0];
  const png = args[1];
  const templateMode = args.includes("--template");

  if (!svg || !png) {
    usage();
    process.exit(2);
  }

  const unknown = args.slice(2).filter((arg) => arg !== "--template");
  if (unknown.length > 0) {
    throw new Error(`Unknown option: ${unknown.join(", ")}`);
  }

  return {
    svg: path.resolve(svg),
    png: path.resolve(png),
    templateMode,
  };
}

function loadSharp() {
  try {
    return require("sharp");
  } catch {
    const candidateDirs = [
      path.join(process.cwd(), "node_modules"),
      path.join(__dirname, "..", "node_modules"),
      path.join(os.homedir(), ".cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules"),
    ];

    for (const dir of candidateDirs) {
      try {
        return createRequire(path.join(dir, "noop.js"))("sharp");
      } catch {
        // Try the next known runtime location.
      }
    }

    return null;
  }
}

function fail(errors, message) {
  errors.push(message);
}

function warn(warnings, message) {
  warnings.push(message);
}

function parseSvgSize(svgText) {
  const svgTag = svgText.match(/<svg\b[^>]*>/i)?.[0] || "";
  const width = Number(svgTag.match(/\bwidth="([0-9.]+)"/i)?.[1]);
  const height = Number(svgTag.match(/\bheight="([0-9.]+)"/i)?.[1]);
  const viewBox = svgTag.match(/\bviewBox="([^"]+)"/i)?.[1];

  if (Number.isFinite(width) && Number.isFinite(height)) {
    return { width, height, source: "width-height" };
  }

  if (viewBox) {
    const parts = viewBox.trim().split(/\s+/).map(Number);
    if (parts.length === 4 && parts.every(Number.isFinite)) {
      return { width: parts[2], height: parts[3], source: "viewBox" };
    }
  }

  return null;
}

function extractImageHrefs(svgText) {
  const hrefs = [];
  const imageTags = svgText.match(/<image\b[^>]*>/gi) || [];
  for (const tag of imageTags) {
    const href = tag.match(/\b(?:href|xlink:href)="([^"]+)"/i)?.[1];
    if (href) hrefs.push(href);
  }
  return hrefs;
}

async function getPngSize(pngPath) {
  const sharp = loadSharp();
  if (!sharp) return null;
  return sharp(pngPath).metadata();
}

async function main() {
  const { svg, png, templateMode } = parseArgs(process.argv);
  const errors = [];
  const warnings = [];

  if (!fs.existsSync(svg)) fail(errors, `SVG missing: ${svg}`);
  if (!fs.existsSync(png)) fail(errors, `PNG missing: ${png}`);
  if (errors.length > 0) {
    console.error(JSON.stringify({ ok: false, errors, warnings }, null, 2));
    process.exit(1);
  }

  const svgText = fs.readFileSync(svg, "utf8");
  const size = parseSvgSize(svgText);
  if (!size) {
    fail(errors, "SVG must declare width/height or viewBox.");
  } else {
    const ratio = size.width / size.height;
    const targetRatio = 3 / 4;
    if (Math.abs(ratio - targetRatio) > 0.002) {
      fail(errors, `SVG ratio must be 3:4. Found ${size.width}:${size.height}.`);
    }
  }

  if (!templateMode && /{{[^}]+}}/.test(svgText)) {
    fail(errors, "Final SVG still contains unresolved template placeholders.");
  }

  const imageHrefs = extractImageHrefs(svgText);
  if (imageHrefs.length === 0) {
    fail(errors, "SVG must include the original uploaded logo through an <image> element.");
  }

  const logoLikeHrefs = imageHrefs.filter((href) => {
    const lower = href.toLowerCase();
    return (
      lower.includes("logo") ||
      lower.includes("%e6%89%a3%e5%ad%90") ||
      lower.includes("扣子") ||
      /\.(png|jpg|jpeg|webp|svg)(\?|#|$)/i.test(lower) ||
      lower.startsWith("data:image/")
    );
  });
  if (logoLikeHrefs.length === 0) {
    warn(warnings, "No obvious logo image href detected. Confirm the uploaded logo is placed unchanged.");
  }

  if (/font-family="[^"]*(Orbitron|Audiowide|Rajdhani|Exo|Oxanium|Teko)/i.test(svgText)) {
    fail(errors, "Detected a sci-fi/display font family. Use the skill font policy instead.");
  }

  if (/<text\b/i.test(svgText) === false) {
    warn(warnings, "No editable <text> elements detected. Final cover may not be editable enough.");
  }

  const pngSize = await getPngSize(png);
  if (pngSize) {
    const pngRatio = pngSize.width / pngSize.height;
    if (Math.abs(pngRatio - 3 / 4) > 0.002) {
      fail(errors, `PNG ratio must be 3:4. Found ${pngSize.width}:${pngSize.height}.`);
    }
  } else {
    warn(warnings, "Could not inspect PNG dimensions because sharp is unavailable.");
  }

  const result = {
    ok: errors.length === 0,
    errors,
    warnings,
    svg,
    png,
    templateMode,
  };

  console.log(JSON.stringify(result, null, 2));
  process.exit(result.ok ? 0 : 1);
}

main().catch((error) => {
  console.error(`validate_cover failed: ${error.message}`);
  process.exit(1);
});
