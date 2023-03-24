// input값 처리
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
[N, arr] = input;
N = parseInt(N);
arr = arr.split(' ').map(Number).sort((a,b) => a-b);

solution(N, arr);

function solution(N, arr) {
  let result = 0;

  for (let i=0; i < N; i++) {
    let temp = arr[i];
    for (let j=0; j < i; j++) {  // i번째 걸리는 시간
      temp += arr[j];
    }
    result += temp;
  }
  console.log(result);
}
