const fs = require("fs");

const input = fs
  .readFileSync(
    "/Users/yeek0620/Desktop/winterAlgorithm/algorithm_study/suho/input.txt"
  )
  .toString()
  .split("\n");

const M = input[0];
const N = input[1];
let i = 0;
let arr = [];

while (true) {
  i++;
  const num = i * i;
  if (M <= num && num <= N) {
    arr.push(num);
  } else if (num > N) {
    break;
  }
}
let result = arr.reduce((prev, cur) => prev + cur, 0);
if (arr.length !== 0) {
  console.log(result);
  console.log(Math.min(...arr));
} else {
  console.log(-1);
}
