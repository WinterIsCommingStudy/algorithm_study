const fs = require("fs");
const input = fs
  .readFileSync("algorithm_study/suho/input.txt")
  .toString()
  .trim("")
  .split("\n");

const [N, ...a] = input;

for (let i = 0; i < N; i++) {
  let PS = a[i];
  let VPS = PS.split("");
  let answer = [];
  let result = "YES";
  for (j = 0; j < VPS.length; j++) {
    if (VPS[j] === "(") {
      answer.push(VPS[j]);
    } else {
      if (answer.length === 0) {
        result = "NO";
      }
      answer.pop();
    }
  }
  if (answer.length !== 0) {
    result = "NO";
  }
  console.log(result);
}
