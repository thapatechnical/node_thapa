const fs = require("fs/promises");
const path = require("path");

const fileName = "asyncFile.txt";
const filePath = path.join(__dirname, fileName);

// const filePath1 = __dirname;

// fs.promises
//   .readdir(filePath1)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// const readFolder = async () => {
//   try {
//     const res = await fs.promises.readdir(filePath1);
//     console.log(res);
//   } catch (error) {
//     console.error(error);
//   }
// };
// readFolder();

//*-------------------------------------------------------------------------------------*
//* fsPromises.writeFile() : Writes data to a file asynchronously. If the file exists, it overwrites the content.
//! syntax: fs.Promises.writeFile(path, data, options);

//? path: The file path to write to.
//? data: The content to write to the file.
//? options: Optional. Specifies encoding (e.g., 'utf8'), mode, or flags.
//*-------------------------------------------------------------------------------------*

// const writeFileExample = async () => {
//   try {
//     await fs.writeFile(filePath, "This is the initial Data", "utf-8");
//     console.log("File created successfully!");
//   } catch (error) {
//     console.error(error);
//   }
// };

// writeFileExample();

//*-------------------------------------------------------------------------------------*
//* Reading a File: fsPromises.readFile() : Reads the contents of a file asynchronously.
//! syntax: fsPromises.readFile(path, options);

//? path: The file path to read.
//? options: Optional. Can specify encoding (e.g., 'utf8') or return a Buffer if no encoding is provided.
//*-------------------------------------------------------------------------------------*
// const readFileExample = async () => {
//   try {
//     const data = await fs.readFile(filePath, "utf-8");
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// readFileExample();

//*-------------------------------------------------------------------------------------*
//* Appending Data: fsPromises.appendFile() : Adds content to the end of a file. If the file does not exist, it creates a new one.
//! syntax: fsPromises.appendFile(path, data, options);

//? path: The file path to read.
//? options: Optional. Can specify encoding (e.g., 'utf8') or return a Buffer if no encoding is provided.
//*-------------------------------------------------------------------------------------*

// const appendFileExample = async () => {
//   try {
//     await fs.appendFile(filePath, "\nThis is the updated Data", "utf-8");
//     console.log("File updated successfully!");
//   } catch (error) {
//     console.error(error);
//   }
// };

// appendFileExample();

//*-------------------------------------------------------------------------------------*
//* Deleting a File: fsPromises.unlink() : Deletes a file by its path.
//! syntax: fsPromises.unlink(path)

//? path: The file path to delete.
//*-------------------------------------------------------------------------------------*

const deleteFileExample = async () => {
  try {
    await fs.unlink(filePath);
    console.log("File deleted successfully!");
  } catch (error) {
    console.error("Error deleting file:", error.message);
  }
};

deleteFileExample();
