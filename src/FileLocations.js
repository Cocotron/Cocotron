const path = require("path");

const rootPath = path.resolve(process.cwd());

const FileLocations = {
  ROOT: rootPath,
  PUBLIC_DIR: path.resolve(rootPath + "/public"),
  BUILD_DIR: path.resolve(rootPath + "/public/build"),
  BUILD_DIR_DEBUG: path.resolve(rootPath + "/public/build/Debug"),
  PROCESSED_SOURCE: path.resolve(rootPath + "/public/build/Debug/main.j"),
  BUILD_DIR_RELEASE: path.resolve(rootPath + "/public/build/Release"),
  SRC_DIR: path.resolve(rootPath + "/src"),
  FRAMEWORKS_DIR: path.resolve(rootPath + "/Frameworks"),
  PROJECT_PACKAGE: path.resolve(rootPath + "/package.json"),
};

module.exports = FileLocations;
