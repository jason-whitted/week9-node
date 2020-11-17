const moment = require("moment"); // Defined in package.json as a package
const myMoment = require("./myLibrary.js"); // A local script that has an export

const now = moment();
myMoment(now);