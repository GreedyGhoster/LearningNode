const fs = require("fs");

const pathToFile = "./test_files/info.txt";

// Reading the file
const readFile = () => {
  const readedFile = fs.readFileSync(pathToFile, "utf8");
  let readedFileArr = readedFile.split("\r\n");
  readedFileArr = readedFileArr.filter((line) => line.trim() !== "");
  return readedFileArr;
  // console.log(readedFileArr);
};
// readFile();

// Write a file
const pathToFileTest = "./test_files/text.txt";
const text =
  "фулорушкпгрукшзпргпшзугпрiwef фцщшарзфшщпгруцфзшщг\r\n щшцзфрощшощзшлыазщпо\n щцшоацщзугшрешернг7пшг";
// fs.writeFileSync(pathToFileTest, text, "utf8");
// console.log(fs.readFileSync(pathToFileTest, "utf8"));

// Write a file from arr
const pathToFileTest2 = "./test_files/text2.txt";
const arr = readFile().join("");
fs.writeFileSync(pathToFileTest2, arr, "utf8");
