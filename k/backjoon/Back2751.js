// input값 처리
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
[N, ...arr] = input;

solution(arr);

function solution(arr) {
  arr = arr.sort((a,b) => a - b);
  console.log(arr.join('\n'));
}
