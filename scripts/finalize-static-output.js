const fs = require("fs");
const path = require("path");

const outDir = path.join(process.cwd(), "out");
const noJekyllFile = path.join(outDir, ".nojekyll");

if (!fs.existsSync(outDir)) {
	throw new Error("Static export output folder 'out' was not found.");
}

fs.writeFileSync(noJekyllFile, "", "utf8");
console.log("Created out/.nojekyll");
