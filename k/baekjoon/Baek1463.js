const input = require('fs').readFileSync('/dev/stdin').toString();
const num = parseInt(input);         // 4일경우
const dp = new Array(num+1).fill(0); // [0, 0, 0, 0, 0]

for (let i=2; i <= num; i++) {
    // 1) 1로 빼주기
    dp[i] = dp[i -1] +1;   // dp[2]와 dp[3], dp[4]에 1, 2, 3이 할당됨  [0, 0, 1, 2, 3]
    
    // 2) 2로 나누기
    if (i % 2 === 0) {
        dp[i] = Math.min(dp[i / 2] +1, dp[i]);   // dp[2]에는 1, dp[4]에는 2가 재할당  [0, 0, 1, 2, 2]
    }
    if (i % 3 === 0) {
        dp[i] = Math.min(dp[i / 3] +1, dp[i]);   // dp[3]에는 1이 재할당됨  [0, 0, 1, 1, 2]
    }
}
console.log(dp[num]);  // dp[4] = 2
                       // 4 - 2 - 1
