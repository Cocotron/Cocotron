const fs = require("fs");
const path = require("path");
const FileLocations = require("./FileLocations");
const PACKAGE = require(FileLocations.PROJECT_PACKAGE);
const { buildDebug, buildRelease } = require("./ProjectBuilder");

const args = process.argv.slice(1);

const options = {
  release: false,
  includeRuntime: false,
};

if (args.includes("--release")) {
  options.release = true;
}

if (args.includes("--runtime")) {
  options.includeRuntime = true;
}

if (!PACKAGE.main) {
  throw new Error(`main file undefined in package.json.`);
}

const mainFile = path.resolve(PACKAGE.main);

if (options.release) {
  buildRelease(mainFile);
} else {
  buildDebug(mainFile);
}
