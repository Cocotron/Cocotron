const fs = require("fs");
const path = require("path");
const child_process = require("child_process");
const { makeDirIfNeeded } = require("./Utils");

const infoJsonTemplate = function (projectName, isFramework) {
  return {
    name: projectName,
    version: "0.0.1",
    description: "",
    isFramework: isFramework,
    main: isFramework ? `tests/tests.j` : "src/main.j",
  };
};

const mainTemplate = `\n#import <Cocotron/Cocotron.j>\n\nalert("Hello from Cocotron!");\n\n`;
const htmlTemplate = `<html>\n<head>\n<title>Cocotron</title>\n</head>\n<body></body>\n</html>`;

const createProject = function (projectName, isFramework = false) {
  const rpath = path.resolve(path.join(process.cwd(), projectName));

  if (fs.existsSync(rpath)) {
    console.error(`Directory "${rpath}" already exists.`);
    process.exit(1);
  }

  makeDirIfNeeded(rpath);
  writeFile(
    path.join(rpath, "info.json"),
    JSON.stringify(infoJsonTemplate(projectName, isFramework), null, "\t")
  );
  makeDirIfNeeded(path.join(rpath, "src"));

  if (isFramework) {
    writeFile(path.join(rpath, `src/${projectName}.j`), "");
    makeDirIfNeeded(path.join(rpath, "tests"));
    writeFile(path.join(rpath, "tests/tests.j"), "");
  } else {
    writeFile(path.join(rpath, "src/main.j"), mainTemplate);
  }

  makeDirIfNeeded(path.join(rpath, "src/styles"));
  makeDirIfNeeded(path.join(rpath, "src/resources"));

  makeDirIfNeeded(path.join(rpath, "Frameworks/Cocotron"));
  writeFile(path.join(rpath, "Frameworks/Cocotron/Cocotron.j"), "");

  makeDirIfNeeded(path.join(rpath, "public"));
  const runtimePath = path.join(__dirname + "/Runtime/Objective-J.h");
  const runtime = child_process.execSync(`cc -x c -E -C -w -P ${runtimePath}`, {
    encoding: "utf-8",
  });
  writeFile(path.join(rpath, "public/Objective-J.js"), runtime);
  writeFile(path.join(rpath, "public/index.html"), htmlTemplate);
};

const writeFile = function (path, contents) {
  fs.writeFileSync(path, contents, "utf-8");
};

module.exports = createProject;
