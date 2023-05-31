const fs = require("fs");
const input = fs.readFileSync("suho/input.txt").toString().trim("").split("\n");
const n = parseInt(input[0]);
const tunnelIn = input.slice(1, n + 1);
const tunnelOut = input.slice(n + 1, n * 2 + 1);
console.log(solution(tunnelIn, tunnelOut));

function solution(tunnelIn, tunnelOut) {
  // 해시 테이블 생성
  const enterCar = new Map();
  tunnelIn.forEach((car, i) => {
    enterCar.set(car, i);
  });
  const exitCar = new Map();
  tunnelOut.forEach((car, i) => {
    exitCar.set(car, enterCar.get(car));
  });
  let cnt = 0;
  for (const [exitCarName, exitIndex] of exitCar) {
    const [firstValue] = enterCar.values();

    if (exitIndex > firstValue) {
      cnt++;
    }
    enterCar.delete(exitCarName);
  }
  return cnt;
}

// function solution(n, cars, exit) {
//   let inCarMap = new Map();
//   let exitCarMap = new Map();
//   for (let i = 0; i < n; i++) {
//     inCarMap.set(cars[i], i);
//     exitCarMap.set(exit[i], i);
//   }

//   let count = 0;

//   for (const [exitCarName, exitIndex] of exitCarMap) {
//     const [firstValue] = inCarMap.values();
//     console.log(exitIndex, inCarMap.values());
//     if (exitIndex > firstValue) {
//       count++;
//     }
//     inCarMap.delete(exitCarName);
//   }
//   //   for (let i = 0; i < n; i++) {
//   //     const exitCar = exit[i];
//   //     const inCarOrder = inCarMap.get(exitCar);
//   //     const exitCarOrder = exitCarMap.get(exitCar);
//   //     if (inCarOrder > exitCarOrder) {
//   //       count++;
//   //     }
//   //   }
//   return count;
// }
