const fs = require("fs");
const input = fs
  .readFileSync("algorithm_study/suho/input.txt")
  .toString()
  .trim("")
  .split("\n")
  .map(Number);
const N = input.shift();
let M = [];
for (let i = 1; i <= N; i++) {
  M.push(i);
}

while (true) {
  M.shift();
  M.push(M[0]);
  M.shift();
  if (M.length === 1) {
    break;
  }
}
console.log(M[0]);
