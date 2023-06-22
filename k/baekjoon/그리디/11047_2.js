// input값 처리
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);
let [N, K, ...arr] = input;
arr = arr.reverse();

console.log(solution(K, arr));

// 동전 개수 최솟값
function solution(K, arr) {
    return arr.reduce((acc, cur) => {
        let cnt = acc + Math.floor(K / cur);  // 동전의 개수
        K %= cur;    // 잔돈
        return cnt;
    }, 0)
}
