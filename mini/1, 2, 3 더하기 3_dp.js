// 1, 2, 3 더하기 3

const fs = require("fs");
const input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split("\n")
  .map((x) => +x);

const T = input[0];
input.shift();
const num = Math.max(...input);

let dp = [0, 1, 2, 4];

for (let i = 4; i <= num; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000009;
}

for (let i = 0; i < T; i++) {
  console.log(dp[input[i]]);
}
