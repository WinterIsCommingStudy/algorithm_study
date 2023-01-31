var fs = require("fs");
var inputs = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((v) => Number(v));
var cases = Number(inputs[0]);
inputs.shift();
let dp = [];
(dp[0] = 0), (dp[1] = 1), (dp[2] = 2);
dp[3] = 4;

let num = Math.max(...inputs);
for (let i = 4; i <= num; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000009;
}
for (let i = 0; i < cases; i++) {
  console.log(dp[inputs[i]]);
}
