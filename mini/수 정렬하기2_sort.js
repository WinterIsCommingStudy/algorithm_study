// 수 정렬하기 2
// sort 사용
const fs = require("fs");
const [N, ...input] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x));

console.log(input.sort((a, b) => a - b).join("\n"));
