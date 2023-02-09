const fs = require("fs");

const input = fs
  .readFileSync(
    "/Users/yeek0620/Desktop/winterAlgorithm/algorithm_study/suho/input.txt"
  )
  .toString()
  .split(" ");

const N = parseInt(input);
let n = N - String(N).length * 9;
let add = 0;
let result = 0;
while (true) {
  n++;
  let arr = n
    .toString()
    .split("")
    .map((x) => parseInt(x))
    .reduce((acc, cur) => acc + cur, 0);
  add = n + arr;
  if (add == N) {
    result = n;
    break;
  }
}
console.log(result);

// const N = Number(input);
// let start = N - String(N).length * 9;
// let M = start;
// let answer;
// while (true) {
//   M++;
//   let sum = M;
//   for (let i = 0; i < String(M).length; i++) {
//     sum = sum + Number(String(M).charAt(i));
//   }
//   if (sum === N) {
//     answer = M;
//     break;
//   }
//   if (M >= N) {
//     answer = 0;
//     break;
//   }
// }
// console.log(answer);
