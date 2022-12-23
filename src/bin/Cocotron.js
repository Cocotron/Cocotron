#!/usr/bin/env node

const { buildRelease } = require("../ProjectBuilder/index.js");
const PACKAGE = require(FileLocations.PROJECT_PACKAGE);

const args = process.argv.slice(1);

if (args.length > 1) {
  const cmd = args[1];
  if (cmd === "dev") {
    require("../DevelopmentServer/index.js");
  } else if (cmd === "create") {
    if (args.length > 2) {
      const projectName = args[2];
      const createProject = require("../ProjectCreator");
      createProject(projectName);
    }
  } else if (cmd === "release") {
    if (!PACKAGE.main) {
      throw new Error(`"main" file is undefined in package.json.`);
    }
    const mainFile = path.resolve(PACKAGE.main);
    buildRelease(mainFile);
  }
}
