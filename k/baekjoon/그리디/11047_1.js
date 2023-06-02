// input값 처리
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);
const [N, K, ...arr] = input;

console.log(solution(N, K, arr));

// 동전 개수 최솟값
function solution(N, K, arr) {
    let cnt = 0;
    for (let i=N-1; i >= 0; i--) {
        cnt += parseInt(K / arr[i]);  // 동전의 개수
        K %= arr[i];        // 잔돈
    }
    return cnt;
}
