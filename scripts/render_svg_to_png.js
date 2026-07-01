#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const os = require("os");
const { createRequire } = require("module");

function usage() {
  console.error("Usage: node scripts/render_svg_to_png.js input.svg output.png [--density 216]");
}

function parseArgs(argv) {
  const args = argv.slice(2);
  const input = args[0];
  const output = args[1];
  let density = 216;

  for (let i = 2; i < args.length; i += 1) {
    if (args[i] === "--density") {
      const next = Number(args[i + 1]);
      if (!Number.isFinite(next) || next <= 0) {
        throw new Error("--density must be a positive number");
      }
      density = next;
      i += 1;
    } else {
      throw new Error(`Unknown option: ${args[i]}`);
    }
  }

  if (!input || !output) {
    usage();
    process.exit(2);
  }

  return {
    input: path.resolve(input),
    output: path.resolve(output),
    density,
  };
}

function loadSharp() {
  try {
    return require("sharp");
  } catch (error) {
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

    throw new Error("Missing dependency: sharp. Run this script in a Codex runtime with sharp available, or install sharp for the active Node.js environment.");
  }
}

async function main() {
  const { input, output, density } = parseArgs(process.argv);

  if (!fs.existsSync(input)) {
    throw new Error(`SVG not found: ${input}`);
  }

  const svg = fs.readFileSync(input);
  fs.mkdirSync(path.dirname(output), { recursive: true });

  const sharp = loadSharp();
  await sharp(svg, { density })
    .png({
      compressionLevel: 9,
      adaptiveFiltering: true,
    })
    .toFile(output);

  const metadata = await sharp(output).metadata();
  console.log(
    JSON.stringify(
      {
        ok: true,
        input,
        output,
        width: metadata.width,
        height: metadata.height,
      },
      null,
      2
    )
  );
}

main().catch((error) => {
  console.error(`render_svg_to_png failed: ${error.message}`);
  process.exit(1);
});
