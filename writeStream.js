const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/myFile.txt", "utf-8");

const readStream = fs.createReadStream("./assets/lorem-ipsum.md", "utf-8");

// copy file from read stream
readStream.pipe(writeStream);

// copy text from terminal in write stream
// process.stdin.pipe(writeStream);

// on read file write in stream file
// readStream.on("data", (data) => {
//   writeStream.write(data);
// });

// read from terminal write in file
// process.stdin.on("data", (data) => {
//   writeStream.write(data);
// });

// write directly in file
// writeStream.write("hello");
// writeStream.write(" world\n");
