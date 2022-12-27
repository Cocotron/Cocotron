const fs = require("fs");
const path = require("path");

const ObjJCompiler = require("./objj-compiler/dist/objj-transpiler.cjs");
const {
  getDependencyTree,
  flattenDependencyTree,
} = require("./DependencyTree");

const { expandMacros } = require("./Preprocessor");
const { getBundle } = require("./BundleProcessor");

const isFileUpToDate = function (filePath, lastCompile) {
  if (!lastCompile) {
    return false;
  }
  const compilationMap = lastCompile.compilationMap;
  if (!compilationMap || !compilationMap.has(filePath)) {
    return false;
  }
  const lastBuildTime = lastCompile.time;
  const stats = fs.statSync(filePath);
  return stats.mtime < lastBuildTime;
};

const preprocess = async function (filePath, lastCompile) {
  try {
    const tree = await getDependencyTree(filePath);
    const files = flattenDependencyTree(tree);
    const promises = [];
    const preprocessedFiles = [];
    for (const file of files) {
      if (!isFileUpToDate(file, lastCompile)) {
        promises.push(expandMacros(file));
      } else {
        promises.push(
          new Promise((finish) => {
            finish({
              path: file,
            });
          })
        );
      }
    }
    await Promise.all(promises)
      .then((results) => {
        for (const result of results) {
          preprocessedFiles.push({
            path: result.path,
            contents: result.contents,
          });
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
    const bundle = await getBundle();
    return {
      files: preprocessedFiles,
      bundle,
    };
  } catch (e) {
    throw new Error(e);
  }
};

const compileFile = function (fileObj, debug = true) {
  const result = ObjJCompiler.compile(fileObj.contents, fileObj.path, {
    acornOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    sourceMap: debug,
    sourceMapIncludeSource: debug,
    includeMethodFunctionNames: debug,
    includeMethodArgumentTypeSignatures: debug,
  });
  if (!result.compiledCode) {
    const errors = result.warningsAndErrors;
    for (const err of errors) {
      console.error(err);
      throw new Error(err.path + ": " + err.message);
    }
  }
  return {
    code: result.compiledCode,
    contents: fileObj.contents,
    path: fileObj.path,
    sourceMap: result.sourceMap,
    time: new Date().getTime(),
  };
};

const buildProject = function (mainFilePath, lastCompile, debug = true) {
  let compilationMap = lastCompile ? lastCompile.compilationMap : new Map();
  return new Promise(async (finish, fail) => {
    const r_mainFilePath = path.resolve(mainFilePath);
    try {
      const { files, bundle } = await preprocess(r_mainFilePath, lastCompile);
      for (const file of files) {
        if (!isFileUpToDate(file.path, lastCompile)) {
          try {
            compilationMap.set(file.path, compileFile(file, debug));
          } catch (err) {
            fail(err);
          }
        }
      }
      finish({
        time: new Date().getTime(),
        files,
        compilationMap,
        bundle,
      });
    } catch (e) {
      fail(e);
    }
  });
};

module.exports = {
  compileFile, 
  buildProject,
};
