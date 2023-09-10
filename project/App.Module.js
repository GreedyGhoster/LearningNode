const fs = require("fs");
const path = require("path");

const pathToDir = "./test_files";
const pathToFile = "./test_files/info.dat";

// Checking if the folder exists
const folderExists = () => {
  fs.existsSync(pathToDir) ? console.log("Yes") : console.log("No");
};
// folderExists();

// Checking if the file exists
const fileExists = () => {
  fs.existsSync(pathToFile) ? console.log("Yes") : console.log("No");
};
// fileExists();

// Calculating size of the file
const calculatingFile = () => {
  const fileSize = fs.statSync(pathToFile).size;
  console.log(fileSize);
};
// calculatingFile();

//Using path methods
const pathMethods = () => {
  console.log(path.basename(pathToFile)); // File name
  console.log(path.dirname(pathToFile)); // File directory name
  console.log(path.extname(pathToFile)); // File extension
  console.log(path.parse(pathToFile)); // All about the file
};
// pathMethods();

// Getting files and directories in the directory
const infoDir = () => {
  const allFiles = fs.readdirSync(pathToDir);
  // console.log(allFiles);
  let out = "";
  allFiles.forEach((file) => {
    out += file + "\n";
  });
  console.log(out);
};
// infoDir();

// Getting an absolute path
const directoryPath = path.join(__dirname, "test_files");
// console.log(directoryPath);
