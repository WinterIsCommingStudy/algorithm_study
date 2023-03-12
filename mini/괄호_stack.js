//괄호
//스택 활용 X
const fs = require("fs");
const [T, ...input] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

const result = [];

for (let i = 0; i < input.length; i++) {
  let count = 0;
  const arr = input[i].split("");
  for (let j = 0; j < arr.length; j++) {
    if (count < 0) {
      break;
    } else {
      if (input[i][j] === "(") {
        count++;
      } else {
        count--;
      }
    }
  }
  if (count === 0) {
    result.push("YES");
  } else {
    result.push("NO");
  }
}

console.log(result.join("\n"));

//(2) stack 사용
// var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split("\n");
// var cases = Number(input[0]);
// var stack = [];
// var answer = "";
// for (var i = 1; i <= cases; i++) {
//   var splited = input[i].split("");
//   stack.push(splited[0]);
//   for (var j = 1; j < splited.length; j++) {
//     if (stack[stack.length - 1] === "(" && splited[j] === ")") {
//       stack.pop();
//     } else {
//       stack.push(splited[j]);
//     }
//   }
//   if (stack.length === 0) {
//     answer += "YES" + "\n";
//   } else {
//     answer += "NO" + "\n";
//   }
//   stack = [];
// }
// console.log(answer);
