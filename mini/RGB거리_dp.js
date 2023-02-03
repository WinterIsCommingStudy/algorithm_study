const fs = require("fs");
let [T, ...arr] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .split("\n");

T = +T;
arr = arr.map((x) => x.split(" ").map((x) => +x));

const dp = [...new Array(T + 1)].map((v) => new Array(3).fill(0));

dp[1] = arr[0];

for (let i = 2; i <= T; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + arr[i - 1][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + arr[i - 1][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + arr[i - 1][2];
}

console.log(Math.min(...dp[T]));
