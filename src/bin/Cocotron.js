#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const FileLocations = require("../FileLocations.js");

const { buildRelease } = require("../ProjectBuilder/index.js");

const args = process.argv.slice(1);

if (args.length > 1) {
  const cmd = args[1];
  if (cmd === "dev") {
    require("../DevelopmentServer/index.js");
  } else if (cmd === "create") {
    if (args.length > 2) {
      const projectName = args[2];
      const createProject = require("../ProjectCreator");
      createProject(projectName, args.includes("--framework"));
    }
  } else if (cmd === "release") {
    if (fs.existsSync(FileLocations.PROJECT_INFO)) {
      const INFO = require(FileLocations.PROJECT_INFO);
      if(INFO.isFramework) {
        fs.cpSync(FileLocations.SRC_DIR, path.join(FileLocations.FRAMEWORKS_DIR, INFO.name), {recursive: true});
        fs.cpSync(FileLocations.PROJECT_INFO, path.join(FileLocations.FRAMEWORKS_DIR, INFO.name, "info.json"));
        return;
      }
      if (!INFO.main) {
        throw new Error(`"main" file is undefined in info.json.`);
      }
      const mainFile = path.resolve(INFO.main);
      buildRelease(mainFile);
    }
  }
}
