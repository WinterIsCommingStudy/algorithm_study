//비밀번호 찾기
const fs = require("fs");
const [X, ...input] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = X.toString().split(" ");

let result = [];
const memo = {};

input.forEach((elem, idx) => {
  if (idx < N) {
    const [url, pwd] = elem.toString().split(" ");
    memo[url] = pwd;
  } else {
    result.push(memo[elem]);
  }
});

console.log(result.join("\n"));
