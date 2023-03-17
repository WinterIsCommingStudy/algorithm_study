// ATM
const fs = require("fs");
const [N, input] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split("\n");

const queue = input
  .split(" ")
  .map((x) => Number(x))
  .sort((a, b) => a - b);

let res = 0;
let sum = 0;

for (let i = 0; i < N; i++) {
  sum += queue[i];
  res += sum;
}

console.log(res);

// (1)
// 3 / 3+1 / 3+1+4 / 3+1+4+3 / 3+1+4+3+2
// const fs = require("fs");
// const [N, input] = fs
//   .readFileSync("./Baekjoon/input.txt")
//   .toString()
//   .split("\n");

// const queue = input
//   .split(" ")
//   .map((x) => Number(x))
//   .sort((a, b) => a - b);

// let res = 0;

// for (let i = 0; i < N; i++) {
//   res += queue[i] * (N - i);
// }

// console.log(res);
