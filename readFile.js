const fs = require("fs");

fs.readFile("./assets/readme.md", "utf-8", (err, text) => {
  console.log("file contents read");

  if (err) {
    console.log(`An error has occured: ${err.message}`);
    process.exit();
  }
  console.log(text);
});
