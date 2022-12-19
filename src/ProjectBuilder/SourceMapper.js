const path = require("path");
const sourceMap = require("source-map");
const SourceMapGenerator = sourceMap.SourceMapGenerator;
const SourceMapConsumer = sourceMap.SourceMapConsumer;

module.exports = class SourceMapper {
  constructor(files, offset = 1) {
    this._generator = new SourceMapGenerator({
      file: files,
    });
    this._outLine = offset;
  }

  async add(file) {
    const lines = file.code.split("\n");
    const consumer = await new sourceMap.SourceMapConsumer(
      file.sourceMap.toString()
    );
    this._generator.setSourceContent(
      file.path,
      file.sourceMap._sourcesContents[`$${path.basename(file.path)}`]
    );
    let lastLine = 1;
    for (let i = 1, length = lines.length; i <= length; i++) {
      const map = consumer.originalPositionFor({ line: i, column: 0 });
      if (map.source) {
        this._generator.addMapping({
          source: file.path,
          original: { line: map.line, column: 0 },
          generated: { line: this._outLine, column: 0 },
        });
        lastLine = map.line;
      } else {
        this._generator.addMapping({
          source: file.path,
          original: { line: lastLine, column: 0 },
          generated: { line: this._outLine, column: 0 },
        });
      }
      this._outLine++;
    }
    consumer.destroy();
  }

  getSourceMap() {
    return this._generator.toString();
  }
};
