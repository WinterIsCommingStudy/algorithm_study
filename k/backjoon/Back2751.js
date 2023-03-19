// input값 처리
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
[N, ...arr] = input;

solution(arr);

function solution(arr) {
  arr = arr.sort((a,b) => a - b);
  console.log(arr.join('\n'));
}


// 방법2: 퀵 소트
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
// [N, ...arr] = input;

// solution(arr);

// function solution(arr) {
//   if(arr.length <= 1) return arr;

//   const pivot = arr[0];
//   const left = [];
//   const right = [];

//   for (let i=1; i < arr.length; i++) {
//     if (arr[i] <= pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }

//     const leftSorted = solution(left);
//     const rightSorted = solution(right);
//     console.log([...leftSorted, pivot, ...rightSorted]);
//   }
// }
