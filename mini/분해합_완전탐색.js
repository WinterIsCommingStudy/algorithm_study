const fs = require("fs");
const N = +fs.readFileSync("./Baekjoon/input.txt").toString();

let M = 0;

for (let i = 0; i < N; i++) {
  let sum = 0;

  const stringValue = i.toString();
  for (let j = 0; j < stringValue.length; j++) {
    sum += parseInt(stringValue[j]);
  }
  sum += i;

  if (sum == N) {
    M = i;
    break;
  }
}

console.log(M);
