const fs = require("fs");
const N = +fs.readFileSync("./Baekjoon/input.txt").toString();

const dp = [1, 3];

for (let i = 2; i <= N; i++) {
  dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
}

console.log(dp[N]);

// (1)
// const fs = require("fs");
// const N = +fs.readFileSync("./Baekjoon/input.txt").toString();

// // [ XX, OX, XO ]
// const dp = [...new Array(N + 1)].map((v) => new Array(3).fill(0));

// dp[1] = [1, 1, 1];

// for (let i = 2; i <= N; i++) {
//   dp[i][0] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % 9901;
//   dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % 9901;
//   dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % 9901;
// }

// const res = dp[N].reduce((a, b) => a + b);
// // const res = dp[N][0] + dp[N][1] + dp[N][2];

// console.log(res % 9901);
