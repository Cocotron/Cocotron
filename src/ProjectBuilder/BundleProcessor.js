const fs = require("fs");
const path = require("path");
const less = require("less");
 
const { ImageMimeTypes, encodeImage } = require("./ImageProcessor");
const FileLocations = require("../FileLocations");
const PACKAGE = require(FileLocations.PROJECT_PACKAGE);


const getFilesInDirectory = function (dirPath) {
    const files = [];
    const items = fs.readdirSync(dirPath);
    for (const item of items) {
      const r_path = path.join(dirPath, item);
      if (fs.statSync(r_path).isDirectory()) {
        const subitems = getFilesInDirectory(r_path);
        for (const subitem of subitems) {
          files.push(subitem);
        }
      } else {
        files.push(r_path);
      }
    }
    return files;
  };


const getBundles = async function () {
  const bundlePaths = PACKAGE.bundles;
  const bundles = [];
  for (const bundle of bundlePaths) {
    const bundlePath = path.resolve(bundle);
    const base64Resources = {};
    const lessPromises = [];
    const bundleFiles = getFilesInDirectory(bundlePath);
    for (const bf of bundleFiles) {
      const extName = path.extname(bf);
      if (Object.keys(ImageMimeTypes).includes(extName)) {
        base64Resources[path.relative(bundlePath, bf)] = encodeImage(bf);
      } else if ([".css", ".less"].includes(extName)) {
        lessPromises.push(
          less.render(fs.readFileSync(bf, "utf-8"), {
            sourceMap: { sourceMap: true },
            filename: bf,
          })
        );
      }
    }
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
          styles[sourceFile] = result.css.replace(/[\r\n]+/gm, "");
          seenFiles.add(...sources);
        }
      }
    }
    bundles.push({
      path: bundlePath,
      resources: base64Resources,
      styles: Object.values(styles),
    });
  }
  return bundles;
};

module.exports = {
  getBundles,
};
