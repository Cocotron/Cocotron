export default {
  input: "src/index.js",
  external: ["acorn-walk", "source-map"],
  output: {
    file: "dist/objj-transpiler.cjs",
    format: "umd",
    name: "ObjJCompiler",
    sourcemap: true,
    globals: {
      "acorn-walk": "acorn.walk",
      "source-map": "ObjectiveJ.sourceMap"
    }
  }
}
