const fs = require("fs");
const path = require("path");
const {
  removeFirstAndLastChar,
  fileExistsWithCaseSync,
} = require("../Utils.js");
const FileLocations = require("../FileLocations");
const { getDependenciesFromPreprocessor } = require("./Preprocessor");

const getImportFilePath = function (importString, sourceFilePath) {
  const innerPath = removeFirstAndLastChar(importString);
  if (importString.startsWith('"')) {
    //local import
    return path.resolve(path.dirname(sourceFilePath) + "/" + innerPath);
  } else if (importString.startsWith("<")) {
    //Framework import
    return path.resolve(FileLocations.FRAMEWORKS_DIR + "/" + innerPath);
  }
};

const scanLineForImport = function (sourceCodeLine) {
  let i = 0,
    len = sourceCodeLine.length;
  let str = "";
  const startDelimiter = ['"', "'", "<"];
  const endDelimiter = ['"', "'", ">"];
  let inside = false;
  for (; i < len; i++) {
    let ch = sourceCodeLine[i];
    if (!inside && startDelimiter.indexOf(ch) > -1) {
      inside = true;
      str += ch;
      continue;
    }

    if (inside && endDelimiter.indexOf(ch) > -1) {
      str += ch;
      inside = false;
      break;
    }

    if (inside) {
      str += ch;
    }
  }
  return str;
};

const _getDependencyTree = function (
  filePath,
  availableDependencies,
  parent,
  parents
) {
  const r_filePath = path.resolve(filePath);

  if (!parents) parents = [];

  if (!fileExistsWithCaseSync(r_filePath)) {
    if (parent) {
      throw new Error(`Imported file ${filePath} in ${parent} does not exist.`);
    }
  }

  if (parents.includes(r_filePath)) {
    return null;
  }
  if (!availableDependencies.has(r_filePath)) {
    return null;
  }

  const source = fs.readFileSync(r_filePath, "utf-8");
  const lines = source.split("\n");
  const dependencies = [];
  for (const line of lines) {
    const trLine = line.trim();
    if (trLine.startsWith("#import ")) {
      const importPath = getImportFilePath(
        scanLineForImport(trLine.substring(8)),
        r_filePath
      );
      const tree = _getDependencyTree(
        importPath,
        availableDependencies,
        r_filePath,
        [r_filePath, ...parents]
      );
      if (tree) {
        dependencies.push(tree);
      }
    }
  }
  return { isBundle: false, path: r_filePath, dependencies, parents };
};

const flattenDependencyTree = function (tree) {
  const dependencies = tree.dependencies;
  let allDep = new Set();
  for (const dep of dependencies) {
    const files = flattenDependencyTree(dep);
    for (const file of files) {
      allDep.add(file);
    }
  }
  allDep.add(tree.path);
  return allDep;
};

const getDependencyTree = async function (filePath) {
  const r_filePath = path.resolve(filePath);
  try {
    const availableDependencies = await getDependenciesFromPreprocessor(
      r_filePath
    );
    availableDependencies.add(r_filePath);
    return _getDependencyTree(r_filePath, availableDependencies);
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  getDependencyTree,
  flattenDependencyTree,
};
