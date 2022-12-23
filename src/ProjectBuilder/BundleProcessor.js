const fs = require("fs");
const path = require("path");
const less = require("less");

const { ResourceMimeTypes, encodeResource } = require("./ResourceProcessor");
const FileLocations = require("../FileLocations");
const { getFilesInDirectory } = require("../Utils");
const PACKAGE = require(FileLocations.PROJECT_PACKAGE);

const getBundle = async function () {
  const bundlePaths = [];
  //add the main bundle
  bundlePaths.push(FileLocations.SRC_DIR);
  //add the frameworks
  const frameworks = PACKAGE.frameworks || [];
  for (const framework of frameworks) {
    bundlePaths.push(path.join(FileLocations.FRAMEWORKS_DIR, framework));
  }

  const base64Resources = {};
  const lessPromises = [];
  for (const bundle of bundlePaths) {
    const bundlePath = path.resolve(bundle);
    //get the resources
    const resourcesDir = path.join(bundlePath, "resources");
    if (fs.existsSync(resourcesDir)) {
      const resourceFiles = getFilesInDirectory(
        resourcesDir,
        Object.keys(ResourceMimeTypes)
      );

      for (const file of resourceFiles) {
        base64Resources[path.relative(resourcesDir, file)] = encodeResource(file);
      }
    }

    const stylesDir = path.join(bundlePath, "styles");
    if (fs.existsSync(stylesDir)) {
      //get the styles
      const styleFiles = getFilesInDirectory(stylesDir, [".less", ".css"]);

      for (const file of styleFiles) {
        lessPromises.push(
          less.render(fs.readFileSync(file, "utf-8"), {
            sourceMap: { sourceMap: true },
            filename: file,
          })
        );
      }
    }
  }

  //concat less
  const styles = {};
  const results = await Promise.all(lessPromises);
  const seenFiles = new Set();
  for (const result of results) {
    if (result.map) {
      const sourceMap = JSON.parse(result.map);
      const sources = sourceMap.sources;
      const sourceFile = sourceMap.sources[sourceMap.sources.length - 1];
      const importedStyles = result.imports;
      for (const im of importedStyles) {
        if (seenFiles.has(im)) {
          delete styles[im];
        }
      }
      seenFiles.add(...importedStyles);
      if (!seenFiles.has(sourceFile)) {
        styles[path.relative(FileLocations.SRC_DIR, sourceFile)] =
          result.css.replace(/[\r\n]+/gm, "");
        seenFiles.add(...sources);
      }
    }
  }

  return {
    resources: base64Resources,
    styles: styles,
  };
};

module.exports = {
  getBundle,
};
