const fs = require("fs");
const path = require("path");

const removeFirstAndLastChar = function (aString, times = 1) {
  return aString.substring(times, aString.length - times);
};

const getFilesInDirectory = function (dirPath, fileTypes) {
  const files = [];
  const items = fs.readdirSync(dirPath);
  for (const item of items) {
    const r_path = path.join(dirPath, item);
    if (fs.statSync(r_path).isDirectory()) {
      const subitems = getFilesInDirectory(r_path, fileTypes);
      for (const subitem of subitems) {
        const ext = path.extname(subitem);
        if (fileTypes.includes(ext)) {
          files.push(subitem);
        }
      }
    } else {
      const ext = path.extname(r_path);
      if (fileTypes.includes(ext)) {
        files.push(r_path);
      }
    }
  }
  return files;
};

const makeDirIfNeeded = function (dirPath) {
  if (!fs.existsSync(path.resolve(dirPath))) {
    fs.mkdirSync(path.resolve(dirPath), { recursive: true });
  }
};

module.exports = {
  removeFirstAndLastChar,
  getFilesInDirectory,
  makeDirIfNeeded,
};
