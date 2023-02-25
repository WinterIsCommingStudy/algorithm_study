const fs = require("fs");
const input = fs
  .readFileSync("algorithm_study/suho/input.txt")
  .toString()
  .trim("")
  .split("\n");

const length = Number(input[0]);
let stack = [];
const value = [...input].slice(1);
let n = 0;
let result = [];
let k = 0;

for (let i = 0; i <= length - 1; i++) {
  const answer = value[i].split(" ");
  switch (answer[0]) {
    case "push":
      stack[n] = answer[1];
      n += 1;
      break;
    case "pop":
      result[k] = stack[0] ? stack[n - 1] : -1;
      if (stack[0]) {
        stack.splice(n - 1, 1);
        n = n - 1;
      }
      k++;
      break;
    case "size":
      result[k] = n;
      k++;
      break;
    case "empty":
      result[k] = stack[0] ? 0 : 1;
      k++;

      break;

    case "top":
      result[k] = stack[0] ? stack[n - 1] : -1;
      k++;
      break;
  }
}
console.log(result.join("\n"));
