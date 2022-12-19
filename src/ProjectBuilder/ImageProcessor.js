const path = require("path");
const fs = require("fs");

const ImageMimeTypes = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

const getDataUri = ({ format, isSvg, mime, source }) =>
  isSvg ? svgToMiniDataURI(source) : `data:${mime};${format},${source}`;

const encodeImage = function (filePath) {
  const mime = ImageMimeTypes[path.extname(filePath)];
  const isSvg = this.mimeType === "image/svg+xml";
  const format = isSvg ? "utf-8" : "base64";
  const source = fs.readFileSync(filePath, format).replace(/[\r\n]+/gm, "");

  return getDataUri({ format, isSvg, mime, source });
};

module.exports = {
  encodeImage,
  ImageMimeTypes,
};
