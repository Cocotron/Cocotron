const FileLocations = require("../FileLocations");
const { buildDebug } = require("../ProjectBuilder");

const PACKAGE = require(FileLocations.PROJECT_PACKAGE);

let app,
  express = require("express"),
  fs = require("fs"),
  path = require("path"),
  host = process.env.HOST || "0.0.0.0",
  port = process.env.PORT || 3000,
  root = path.resolve(process.cwd(), "."),
  indexFile = root + "/public/index.html";

console.log("Starting Dev Server...");
app = express();

var lastCompile = null,
  isDirty = true;

/**
 * Watch files for changes, to mark the build as dirty
 */
fs.watch(FileLocations.SRC_DIR, { recursive: true }, () => {
  isDirty = true;
});

if (path.dirname(PACKAGE.main) !== FileLocations.SRC_DIR) {
  fs.watch(path.dirname(PACKAGE.main), { recursive: true }, () => {
    isDirty = true;
  });
}

app.get("/", async (_, res) => {
  if (isDirty) {
    const compileHtml = fs.readFileSync(__dirname + "/Compiling.html", "utf-8");
    console.log("Building DEBUG...");
    lastCompile = await buildDebug(path.resolve(PACKAGE.main), lastCompile);
    isDirty = false;
    res.send(compileHtml);
  } else {
    const html = fs.readFileSync(indexFile, "utf-8");
    const final =
      html.substring(0, html.length - 7) +
      `<script src="Objective-J.js" type="text/javascript"></script>\n` +
      `<script src="build/Debug/debug.js" type="text/javascript"></script>\n` +
      html.substring(html.length - 7);
    res.send(final);
  }
});

app.get("/buildStatus", (_, res) => {
  if (isDirty) {
    res.sendStatus(406);
  } else {
    res.sendStatus(200);
  }
});

app.use(express.static(root + "/public"));

app.server = app.listen(port, host, serverStarted);

function serverStarted() {
  console.log("Server started", host, port);
  console.log("Root directory", root);
  console.log("Press Ctrl+C to exit...\n");
}
