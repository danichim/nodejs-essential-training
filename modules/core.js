const path = require("path");
const { getHeapStatistics } = require("v8");
const util = require("util");

util.log(path.basename(__filename));
util.log(" The name of the current file");
util.log(getHeapStatistics());
