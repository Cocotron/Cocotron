const fs = require("fs");
const path = require("path");
const FileLocations = require("../FileLocations");
const child_process = require("child_process");
const { removeFirstAndLastChar, fileExistsWithCaseSync } = require("../Utils");

const getDependenciesFromPreprocessor = function (filePath) {
  return new Promise((finish, fail) => {
    const r_filePath = path.resolve(filePath);
    const cmd = `cc -x c -M -I${FileLocations.FRAMEWORKS_DIR} ${r_filePath}`;
    const out = child_process.exec(cmd, { encoding: "utf8" }, (err, out) => {
      if (err) {
        fail(err);
      }
      const lines = out.split("\\\n");
      lines.shift();
      const dependencies = new Set();
      for (const line of lines) {
        const r = path.resolve(line.trim());
        dependencies.add(r);
      }
      finish(dependencies);
    });
  });
};

const expandMacros = function (filePath) {
  return new Promise((finish, fail) => {
    const source = fs.readFileSync(filePath, "utf-8");
    const lines = source.split("\n");
    const outLines = [];
    for (const line of lines) {
      const trLine = line.trim();
      if (trLine.startsWith("#import ")) {
        outLines.push("//-" + trLine);
      } else {
        outLines.push(line);
      }
    }
    let adjSource = outLines.join("\n");
    getDependenciesFromPreprocessor(filePath)
      .then((dependencies) => {
        if (dependencies.size > 0) {
          adjSource = adjSource.replace(/'/g, "`");
          adjSource = adjSource.replace(/%/g, "%%");
          let cmd = `printf %s '\n${adjSource}\n' | cc -x c -E -C -w -P -traditional -I${FileLocations.FRAMEWORKS_DIR}`;
          for (const dep of dependencies) {
            if (dep !== filePath) cmd += ` -imacros ${dep}`;
          }
          cmd += " -";
          child_process.exec(cmd, { encoding: "utf8" }, (err, stout) => {
            if (err) {
              fail(err);
            }
            const out = removeFirstAndLastChar(stout.replace(/%%/g, "%"));
            finish({ path: filePath, contents: out });
          });
        } else {
          finish({ path: filePath, contents: adjSource });
        }
      })
      .catch((err) => {
        fail(err);
      });
  });
};

module.exports = {
  getDependenciesFromPreprocessor,
  expandMacros,
};
