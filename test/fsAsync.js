const fs = require("fs");
const path = require("path");

const fileName = "asyncFile.txt";
const filePath = path.join(__dirname, fileName);

// const readDirExample = async () => {
//   try {
//     const content = await fs.promises.readdir(filePath);
//     console.log(content);
//   } catch (error) {
//     console.error(error);
//   }
// };

// readDirExample();

//*-------------------------------------------------------------------------------------*
//* fsPromises.writeFile() : Writes data to a file asynchronously. If the file exists, it overwrites the content.
//! syntax: fsPromises.writeFile(path, data, options);

//? path: The file path to write to.
//? data: The content to write to the file.
//? options: Optional. Specifies encoding (e.g., 'utf8'), mode, or flags.
//*-------------------------------------------------------------------------------------*
// const writeFileExample = async () => {
//   try {
//     await fs.promises.writeFile(
//       filePath,
//       "This is the initial content",
//       "utf8"
//     );
//     console.log("File written successfully!");
//   } catch (error) {
//      console.error('Error writing file:', err.message);
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
//     const content = await fs.promises.readFile(filePath, "utf-8");
//     console.log(content);
//   } catch (error) {
//    console.error('Error reading file:', err.message);
//   }
// };

// readFileExample();

//*-------------------------------------------------------------------------------------*
//* Appending Data: fsPromises.appendFile() : Adds content to the end of a file. If the file does not exist, it creates a new one.
//! syntax: fsPromises.appendFile(path, data, options);

//? path: The file path to read.
//? options: Optional. Can specify encoding (e.g., 'utf8') or return a Buffer if no encoding is provided.
//*-------------------------------------------------------------------------------------*

const appendFileExample = async () => {
  try {
    await fs.promises.appendFile(
      filePath,
      "\nThis is the updated content",
      "utf-8"
    );
    console.log("Content appended successfully!");
  } catch (error) {
    console.error("Error appending file:", err.message);
  }
};

appendFileExample();

//*-------------------------------------------------------------------------------------*
//* Deleting a File: fsPromises.unlink() : Deletes a file by its path.
//! syntax: fsPromises.unlink(path)

//? path: The file path to delete.
//*-------------------------------------------------------------------------------------*

const deleteFileExample = async () => {
  try {
    await fs.promises.unlink(filePath);
    console.log("File deleted successfully!");
  } catch (error) {
    console.error("Error deleting file:", err.message);
  }
};

deleteFileExample();
