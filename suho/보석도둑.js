const fs = require("fs");
const input = fs.readFileSync("suho/input.txt").toString().trim("").split("\n");

function solution(jewel, w) {
  let j_arr = [];
  let weight = w;
  let result = [];
  jewel.map((item) => {
    j_arr.push(item.split(" ").map(Number));
  });

  j_arr.sort((a, b) => {
    return b[1] - a[1];
  });

  let a = [];
  for (let i = 0; i < j_arr.length; i++) {
    a.push(j_arr[i]);
    for (x of a) {
      for (y of weight) {
        if (x[0] <= y) {
          result.push(x[1]);
          weight.shift();
          a.pop();
        }
      }
    }
  }

  let sum = result.reduce((acc, cur) => acc + cur);

  return sum;
}

const [N, K] = input.shift().split(" ");
const jewel = input.slice(0, N);
const w = input
  .slice(N)
  .map(Number)
  .sort((a, b) => a - b);
console.log(solution(jewel, w));
