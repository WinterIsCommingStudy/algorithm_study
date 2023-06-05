const fs = require("fs");
const input = fs
  .readFileSync("algorithm_study/suho/input.txt")
  .toString()
  .trim("")
  .split("\n");

const n = input.shift();
const number = input.map(Number);
console.log(number.sort((a, b) => a - b).join("\n"));
