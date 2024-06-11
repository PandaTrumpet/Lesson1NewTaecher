// // import
// const obj = require("./products");
// // console.log(obj);

// // деструктуризація

// const { products } = require("./products");
// console.log(products);

// import { categories } from "./products.js";
// // console.log(categories);
// import { isLeapYear } from "./dateFunctions/index.js";
// console.log(isLeapYear(1990));

// ================================Working with fiiles=============================

// import fs from "fs";
// fs.readFile("./files/file.txt", (error, data) => {
//   console.log(error);
//   console.log(data);
// });

import DetectFileEncodingAndLanguage from "detect-file-encoding-and-language";
import fs from "fs/promises";

// fs.readFile("./files/file.txt")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

const func = async () => {
  //   const buffer = await fs.readFile("./files/file.txt");
  //   const text = buffer.toString();
  //   console.log(text);

  //   const text = await fs.readFile("./files/file.txt", "utf-8");
  //   console.log(text);

  // інформація про кодування

  //   const fileData = await DetectFileEncodingAndLanguage("./files/file.txt");

  //   const data = await fs.readFile("./files/file.txt", fileData);
  //   console.log(data);

  // Append

  //   await fs.appendFile("./files/file.txt", "\nPHP forever");
  //   // n - з нового рядка

  // Writefile

  //   const result = await fs.writeFile("./files/file.txt", "Helo new file");
  //   await fs.appendFile("./files/file2.txt", "\nPHP forever");
  //   await fs.writeFile("./files/file3.txt", "\nPHP forever");
  await fs.unlink("./files/file2.txt", "\nPHP forever");
};
func();
