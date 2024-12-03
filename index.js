// import os from "os";
// import path from "path";
// node pakage ekenma ganna oninm import os from "node:os"

// import math from ". /myFunctions.js";

// console.log(math(2, 3));

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//*************  read file    ************************ */
// import { readFile } from "node:fs";
// readFile(
//   join(__dirname, "myName.txt"),
//   {
//     encoding: "utf-8",
//   },
//   (err, data) => {
//     if (!err) {
//       log(data);
//     }
//   }
// );

//*************   write file   **************************** */
// import { writeFile } from "node:fs";
// const content =
//   "jsdffffffffffkgskj sjgfkjsgdfjs shlfhklshfklsd kjshflskdhflk klshdfksdfj khskfhs";
// writeFile(join(__dirname, "myName.txt"), content, (err) => {
//   if (err) {
//     log(err);
//   } else {
//     log("success!");
//   }
// });

// import { appendFile } from "node:fs";

// const content1 = "this is a append content update";

// appendFile(join(__dirname, "myName.txt"), content1, (err) => {
//   if (!err) {
//     log("append success!");
//   }
// });

import { rm } from "fs";

rm(join(__dirname, "myName.txt"), (err) => {
  if (!err) {
    console.log("FILE IS DELETED");
  }
});
