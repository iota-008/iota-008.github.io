const fs = require("fs");
const path = require("path");

const projectThumbnailRoot = path.join(
	process.cwd(),
	"public",
	"images",
	"project-thumbnail"
);
const outputFile = path.join(
	process.cwd(),
	"src",
	"constants",
	"projectImageManifest.js"
);

const supportedExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif"]);

const naturalSort = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });

const listDirectories = (rootPath) => {
	if (!fs.existsSync(rootPath)) {
		return [];
	}

	return fs
		.readdirSync(rootPath, { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.map((entry) => entry.name)
		.sort((first, second) => naturalSort.compare(first, second));
};

const listImagesForFolder = (folderName) => {
	const folderPath = path.join(projectThumbnailRoot, folderName);
	if (!fs.existsSync(folderPath)) {
		return [];
	}

	return fs
		.readdirSync(folderPath, { withFileTypes: true })
		.filter((entry) => entry.isFile())
		.map((entry) => entry.name)
		.filter((fileName) => supportedExtensions.has(path.extname(fileName).toLowerCase()))
		.sort((first, second) => naturalSort.compare(first, second))
		.map((fileName) => `/images/project-thumbnail/${folderName}/${fileName}`);
};

const folders = listDirectories(projectThumbnailRoot);
const manifest = folders.reduce((accumulator, folderName) => {
	accumulator[folderName] = listImagesForFolder(folderName);
	return accumulator;
}, {});

const output = `export const projectImageManifest = ${JSON.stringify(manifest, null, 2)};\n`;
fs.writeFileSync(outputFile, output, "utf8");
console.log(`Generated project image manifest at ${path.relative(process.cwd(), outputFile)}`);
