const cp = require("child_process");

// open browser
// cp.exec("open http://google.com");

// open terminal
// cp.exec("open -a Terminal .");

cp.exec("node readStream", (err, data, stderr) => {
  console.log(data);
  //   if (err) {
  //     throw err;
  //   }
  //   console.log(data);
});
