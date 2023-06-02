// input값 처리
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
[N, ...arr] = input;

console.log(solution(arr).join('\n'));

function solution(arr) {
  // 중복 제거
  arr = Array.from(new Set(arr));
  // 사전순 정렬
  sortedArr = arr.sort((a,b) => a > b ? 1 : (a < b ? -1 : 0));
  // 길이 정렬
  result = sortedArr.sort((a,b) => a.length - b.length);

  return result;
}
