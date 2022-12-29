const fs = require("fs");
const path = require("path");
const less = require("less");
const { transform } = require("./cib-compiler/dist/buble.cjs");
const { minify } = require("terser");

const { ResourceMimeTypes, encodeResource } = require("./ResourceProcessor");
const FileLocations = require("../FileLocations");
const { getFilesInDirectory } = require("../Utils");

let INFO = {};
if (fs.existsSync(FileLocations.PROJECT_INFO)) {
  INFO = require(FileLocations.PROJECT_INFO);
}

/**
 * A "Cib" is just JSX, representing freeze-dried objects in a hierarchy
 * @param {*} source
 * @returns
 */
const compileCib = async function (source) {
  const out = transform(source, {
    jsx: "O",
    jsxFragment: "null",
  });
  const minified = await minify(out.code, { module: true });
  return minified.code;
};

const getBundle = async function () {
  const bundlePaths = new Set();
  //add the main bundle, the same directory as the main entry file
  bundlePaths.add(path.resolve(path.dirname(INFO.main)));
  bundlePaths.add(FileLocations.SRC_DIR);
  //add the frameworks
  const frameworks = INFO.frameworks || [];
  for (const framework of frameworks) {
    bundlePaths.add(path.join(FileLocations.FRAMEWORKS_DIR, framework));
  }

  const cibCode = {};
  const base64Resources = {};
  const lessPromises = [];

  for (const bundle of bundlePaths) {
    const bundlePath = path.resolve(bundle);

    //compile any Cib files
    const cibFiles = getFilesInDirectory(bundlePath, [".cib"]);
    for (const cib of cibFiles) {
      const source = fs.readFileSync(path.resolve(cib), "utf-8");
      const name = path.relative(bundlePath, cib);
      cibCode[name.substring(0, name.lastIndexOf("."))] = await compileCib(
        source
      );
    }
    //get the resources
    const resourcesDir = path.join(bundlePath, "resources");
    if (fs.existsSync(resourcesDir)) {
      const resourceFiles = getFilesInDirectory(
        resourcesDir,
        Object.keys(ResourceMimeTypes)
      );

      for (const file of resourceFiles) {
        base64Resources[path.relative(resourcesDir, file)] =
          encodeResource(file);
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
    info: INFO,
    cibs: cibCode,
    resources: base64Resources,
    styles: styles,
  };
};

module.exports = {
  getBundle,
};
