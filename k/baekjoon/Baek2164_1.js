// input값 처리
const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const arr = Array.from({ length: parseInt(input)}, (v, i) => i + 1);

solution(arr);

function solution(arr) {
  while(arr.length > 1) {
    // 1. 맨 위에 있는 수 제거
    arr.shift();
    // 2. 그다음 위에 있는 수를 맨밑으로 이동
    arr.push(arr.shift());
  }
  console.log(arr[0]);
}
