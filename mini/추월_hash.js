//추월
const fs = require("fs");
const [cars, ...input] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

let arr1 = [];
let arr2 = [];
input.forEach((elem, idx) => (idx < cars ? arr1.push(elem) : arr2.push(elem)));

let overtaking = 0;
let i = 0,
  j = 0;

while (j < +cars) {
  if (arr1[i] !== arr2[j]) {
    let idx = arr1.indexOf(arr2[j]);
    overtaking++;
    j++;
    arr1.splice(idx, 1);
  } else {
    i++;
    j++;
  }
}

console.log(overtaking);

//(1)
// input값 처리
// const input = require("fs")
//   .readFileSync("./Baekjoon/input.txt")
//   .toString()
//   .trim()
//   .split("\n");
// const N = parseInt(input[0]);
// const tunnelIn = input.slice(1, N + 1);
// const tunnelOut = input.slice(N + 1, N * 2 + 1);

// console.log(solution(tunnelIn, tunnelOut));

// // 추월한 자동차 수 카운트
// function solution(tunnelIn, tunnelOut) {
//   // 해시 테이블 생성
//   const enterCar = new Map();
//   tunnelIn.forEach((car, i) => {
//     enterCar.set(car, i);
//   });

//   const exitCar = new Map();
//   tunnelOut.forEach((car, i) => {
//     exitCar.set(car, enterCar.get(car));
//   });

//   let cnt = 0;
//   for (const [exitCarName, exitIndex] of exitCar) {
//     const [firstValue] = enterCar.values();
//     console.log([firstValue]);
//     console.log(enterCar.values());
//     if (exitIndex > firstValue) {
//       cnt++;
//     }
//     enterCar.delete(exitCarName);
//   }
//   return cnt;
// }
