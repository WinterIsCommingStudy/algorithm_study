// 제로
const fs = require("fs");
const input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

const k = Number(input[0]);

const stack = [];

for (let i = 1; i <= k; i++) {
  const val = Number(input[i]);

  if (val !== 0) {
    stack.push(val);
  } else {
    stack.pop();
  }
}

const result = stack.reduce((a, b) => a + b, 0);
// let result = 0;
// for (let val of stack) {
//   result += val;
// }

console.log(result);
