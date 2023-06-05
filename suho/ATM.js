const fs = require("fs");
const input = fs
  .readFileSync("algorithm_study/suho/input.txt")
  .toString()
  .trim("")
  .split("\n");

const [N, ...arr] = input;
const time = arr
  .toString()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let n = 0;
let P = 0;
for (let i = 0; i < N; i++) {
  P += n + time[i];
  n += time[i];
}

console.log(P);
