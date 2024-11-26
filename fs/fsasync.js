//todo Time for Asynchronous

const fs = require("fs");
const path = require("path");

const fileName = "fsAsycn.txt";
const filePath = path.join(__dirname, fileName);
//*-------------------------------------------------------------------------------------*
//* fs.writeFile(): Writes data to a file, replacing the file if it already exists.
//! syntax: fs.writeFile(path, data, options, callback);

//? path: File path to write to.
//? data: Content to write.
//? options: Optional. Specifies encoding ('utf8'), mode, or flag.
//? callback: A function with an err parameter.
//*-------------------------------------------------------------------------------------*

// fs.writeFile(filePath, "This is the initial Data", "utf-8", (err) => {
//   if (err) console.error(err);
//   else console.log("File has been Saved");
// });

//*-------------------------------------------------------------------------------------*
//* fs.readFile(): Reads the contents of a file asynchronously and returns the data as a buffer or string.
//! syntax: fs.readFile(path, options, callback);

//? path: File path to read from.
//? options: Optional. An object or string specifying the encoding ('utf8') or flag ('r' for reading).
//? callback: A function with parameters (err, data).
//*-------------------------------------------------------------------------------------*
// fs.readFile(filePath, (err, data) => {
//   if (err) console.error(err);
//   else console.log(data.toString());
// });

// fs.readFile(filePath, "utf-8", (err, data) => {
//   if (err) console.error(err);
//   else console.log(data);
// });

//*-------------------------------------------------------------------------------------*
//* fs.appendFile(): Appends data to a file. If the file doesn’t exist, it is created.
//! syntax: fs.appendFile(path, data, options, callback);

//*-------------------------------------------------------------------------------------*
// fs.appendFile(filePath, "\nThis is the Updated Data", "utf-8", (err) => {
//   if (err) console.error(err);
//   else console.log("File has been Updated");
// });

//*-------------------------------------------------------------------------------------*
//* fs.unlink(): Deletes a file asynchronously.
//! syntax: fs.unlink(path, callback);

//*-------------------------------------------------------------------------------------*
// fs.unlink(filePath, (err) => {
//   if (err) console.error(err);
//   else console.log("File has been Deleted");
// });
