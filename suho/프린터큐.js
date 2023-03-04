const fs = require("fs");
const input = fs
  .readFileSync("algorithm_study/suho/input.txt")
  .toString()
  .trim("")
  .split("\n");

let [n, ...arr] = input;

arr = arr.map((i) => i.split(" ").map(Number));

for (let i = 0; i < n; i++) {
  let N = arr[i * 2][0];
  let T = arr[i * 2][1];
  let M = arr[i * 2 + 1];
  let count = 0;
  let a = 0;
  while (true) {
    let MaxN = Math.max(...M);
    if (M[0] === MaxN) {
      count++;
      if (T == 0) {
        console.log(count);
        break;
      }
      M.shift();
      T--;
    } else {
      M.push(M[0]);
      M.shift();
      if (T === 0) {
        T = M.length - 1;
      } else {
        T--;
      }
    }
    MaxN = Math.max(...M);
  }
}
