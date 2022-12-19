const fs = require("fs");
const path = require("path");

const removeFirstAndLastChar = function (aString, times = 1) {
  return aString.substring(times, aString.length - times);
};

module.exports = {
  removeFirstAndLastChar,
};
