const { performance } = require("perf_hooks");
const fs = require("fs");
const path = require("path");
const SourceMapper = require("./SourceMapper");
const { minify } = require("terser");

const FileLocations = require("../FileLocations");
const { buildProject } = require("./Compiler");
const { makeDirIfNeeded } = require("../Utils");

const buildDebug = function (mainFilePath, lastCompile) {
  const startTime = performance.now();
  return new Promise((finish, fail) => {
    makeDirIfNeeded(FileLocations.BUILD_DIR_DEBUG);
    buildProject(mainFilePath, lastCompile, true)
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
  const { bundle, compilationMap, files } = out;

  let code = "\nvar __$objj_bundle = ";
  const { info, resources, styles, cibs } = bundle;
  code += `${JSON.stringify({ info, resources, styles, cibs })}\n\n`;

  const offset = code.split("\n").length;

  const outFiles = [];
  for (const file of files) {
    const out = compilationMap.get(file.path);
    outFiles.push({ ...file, ...out });
    code += out.code + "\n";
  }

  return { code, offset, files: outFiles };
};

const writeDebugOutput = async function (out) {
  const { code, offset, files } = concatOutput(out);

  const sourceMapFile = await createSourceMap(files, offset);
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
    buildProject(mainFilePath, null, false)
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
  var minified = await minify(code, { module: true });
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
