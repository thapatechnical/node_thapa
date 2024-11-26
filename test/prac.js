const fs = require("fs");
const path = require("path");

// This shows list of files in the given directory
// const files = fs.readdirSync(".");
// console.log(files);


//*-------------------------------------------------------------------------------------*
//* fs.writeFileSync(): Writes data to a file. If the file does not exist, it will be created. If the file exists, it overwrites the content.
//! syntax: fs.writeFileSync(filePath, data, options);
//? filePath: The file path to write to.
//? data: The content to write to the file.
//? options: Optional. Includes encoding ('utf8'), mode, or flags.
utf-8 (short for "8-bit Unicode Transformation Format") Encodes characters from nearly all written languages, symbols, and emojis.
//*-------------------------------------------------------------------------------------*

const fileName = "node_fs.txt";
const filePath = path.join(__dirname, fileName);
console.log(filePath);

const writeSync = fs.writeFileSync(
  filePath,
  "This is the initial content.",
  "utf-8"
);

console.log(writeSync);

//*-------------------------------------------------------------------------------------*
//* fs.readFileSync(): Reads a file's content and returns it as a string or Buffer.
//! syntax: const data = fs.readFileSync(filePath, options);
//? filePath: Path of the file to read.
//? options: Optional. Encoding ('utf8') to get data as a string.
//*-------------------------------------------------------------------------------------*

// const readFile = fs.readFileSync("./math.js");
// const readFile = fs.readFileSync(filePath, "utf-8");
// By passing "utf-8" as the encoding parameter, fs.readFileSync directly returns the file content as a string.
// Use .toString() if working with binary data (Buffer): For example, if you need both the raw binary data and its string representation.
// console.log(readFile);

//*-------------------------------------------------------------------------------------*
//* fs.appendFileSync(): Appends data to a file. If the file does not exist, it creates the file.
//! syntax: fs.appendFileSync(filePath, data, options);
//? filePath: File path to append to.
//? data: Content to add to the file.
//? options: Optional. Encoding options ('utf8').
//*-------------------------------------------------------------------------------------*

// const updateFile = fs.appendFileSync(
//   filePath,
//   "\nThis is the updated Line",
//   "utf-8"
// );

// console.log(updateFile);

//*-------------------------------------------------------------------------------------*
//* Delete File (fs.unlinkSync()) : Deletes a file by its path.
//! syntax: fs.unlinkSync(filePath);
//? filePath: The path of the file to delete.
//*-------------------------------------------------------------------------------------*

// const deleteFile = fs.unlinkSync(filePath);
// console.log(deleteFile);

//*-------------------------------------------------------------------------------------*
//* Rename File (fs.renameSync) : Renames a file from one name to another.
//! syntax: fs.renameSync(oldPath, newPath);
//? oldPath: Current file path.
//? newPath: New file path or name.
//*-------------------------------------------------------------------------------------*
// const filePathUpdated = path.join(__dirname, "fsSync.txt");

// const renameFile = fs.renameSync(filePath, filePathUpdated);
// console.log(renameFile);

//! Synchronous methods block the event loop and should be avoided in production.
