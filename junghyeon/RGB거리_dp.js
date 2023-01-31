var fs = require("fs");
var dp = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((str) => str.split(" ").map(Number));
let n = dp.shift();
n = n[0];

for (let i = 1; i < n; i++) {
  dp[i][0] += Math.min(dp[i - 1][1], dp[i - 1][2]);
  dp[i][1] += Math.min(dp[i - 1][0], dp[i - 1][2]);
  dp[i][2] += Math.min(dp[i - 1][0], dp[i - 1][1]);
}
console.log(Math.min(dp[n - 1][0], dp[n - 1][1], dp[n - 1][2]));
