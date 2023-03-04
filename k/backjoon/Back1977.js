const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const M = parseInt(input[0]);
const N = parseInt(input[1]);

const m = parseInt(Math.ceil(Math.sqrt(M)));  // 제곱근 m
const n = parseInt(Math.floor(Math.sqrt(N))); // 제곱근 n

let sum = 0; // 완전제곱수의 합

for (let i=m; i <= n; i++) {
    sum += Math.pow(i, 2);   // 완전제곱수의 총 합
}

if (sum > 0) {
    console.log(sum);
    console.log(parseInt(Math.pow(m, 2)));  // 완전제곱수 최솟값
} else {
    console.log(-1);       // 합이 0일때, 완전제곱수 X
}
