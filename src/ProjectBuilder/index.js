const { performance } = require("perf_hooks");
const fs = require("fs");
const path = require("path");
const SourceMapper = require("./SourceMapper");
const { minify } = require("terser");

const FileLocations = require("../FileLocations");
const { buildProject, writeCompilationOutput } = require("./Compiler");

const makeDirIfNeeded = function (dirPath) {
  if (!fs.existsSync(path.resolve(dirPath))) {
    fs.mkdirSync(path.resolve(dirPath), { recursive: true });
  }
};

const buildDebug = function (mainFilePath, lastCompile) {
  const startTime = performance.now();
  return new Promise((finish, fail) => {
    makeDirIfNeeded(FileLocations.BUILD_DIR_DEBUG);
    buildProject(mainFilePath, lastCompile)
      .then(async (out) => {
        await writeDebugOutput(out);
        const endTime = performance.now();
        console.log(
          `Debug build completed in ${Math.round(endTime - startTime)}ms.`
        );
        finish(out);
      })
      .catch((err) => {
        fail(err);
      });
  });
};

const concatOutput = function (out) {
  const { bundles, compilationMap } = out;

  let code = "\nvar __$objj_bundles = {";
  for (const bundle of bundles) {
    const { resources, styles } = bundle;
    const bundleName = path.basename(bundle.path);
    code += `\n"${bundleName}" : ${JSON.stringify({ resources, styles })},\n`;
  }
  code += "}\n\n";

  for (const [_, file] of compilationMap) {
    code += file.code + "\n";
  }
  return { code, bundles, compilationMap };
};

const writeDebugOutput = async function (out) {
  const { code, compilationMap } = concatOutput(out);
  const offset = code.split("\n").length;

  const sourceMapFile = await createSourceMap(compilationMap.values(), offset);
  fs.writeFileSync(
    FileLocations.BUILD_DIR_DEBUG + "/debug.js",
    code + "//# sourceMappingURL=" + sourceMapFile,
    "utf-8"
  );
};

const createSourceMap = async function (files, offset) {
  const sourceMapFile = FileLocations.BUILD_DIR_DEBUG + "/debug.js.map";
  const sourceMapper = new SourceMapper("debug.js", offset);
  for (const file of files) {
    await sourceMapper.add(file);
  }
  fs.writeFileSync(sourceMapFile, sourceMapper.getSourceMap(), "utf-8");
  return path.basename(sourceMapFile);
};

const buildRelease = function (mainFilePath) {
  const startTime = performance.now();
  return new Promise((finish, fail) => {
    makeDirIfNeeded(FileLocations.BUILD_DIR_RELEASE);
    buildProject(mainFilePath)
      .then(async (out) => {
        await writeReleaseOutput(out);
        const endTime = performance.now();
        console.log(
          `Release build completed in ${Math.round(endTime - startTime)}ms.`
        );
        finish(out);
      })
      .catch((err) => {
        fail(err);
      });
  });
};

const writeReleaseOutput = async function (out) {
  const { code } = concatOutput(out);

  var minified = await minify(code);
  fs.writeFileSync(
    FileLocations.BUILD_DIR_RELEASE + "/release.js",
    minified,
    "utf-8"
  );
};

const clean = function () {
  if (fs.existsSync(FileLocations.BUILD_DIR)) {
    fs.rmSync(FileLocations.BUILD_DIR, { recursive: true, force: true });
  }
};

module.exports = {
  buildDebug,
  buildRelease,
  clean,
};