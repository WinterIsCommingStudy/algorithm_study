const fs = require("fs");
const [M, N] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split("\n")
  .map(Number);

const arr = [];

for (let i = M; i <= N; i++) {
  if (Number.isInteger(Math.sqrt(i))) {
    arr.push(i);
  }
}

if (arr.length === 0) {
  console.log(-1);
} else {
  const min = arr[0];
  const sum = arr.reduce((a, b) => a + b);
  console.log(sum);
  console.log(min);
}
