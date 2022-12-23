const path = require("path");
const fs = require("fs");
const svgToMiniDataURI = require("mini-svg-data-uri");

const ResourceMimeTypes = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".pdf": "application/pdf",
  ".ogg": "audio/ogg",
  ".mp3": "audio/mp3",
};

const getDataUri = ({ format, isSvg, mime, source }) =>
  isSvg ? svgToMiniDataURI(source) : `data:${mime};${format},${source}`;

const encodeResource = function (filePath) {
  const mime = ResourceMimeTypes[path.extname(filePath)];
  const isSvg = mime === "image/svg+xml";
  const format = isSvg ? "utf-8" : "base64";
  const source = fs.readFileSync(filePath, format).replace(/[\r\n]+/gm, "");

  return getDataUri({ format, isSvg, mime, source });
};

module.exports = {
  encodeResource,
  ResourceMimeTypes,
};
