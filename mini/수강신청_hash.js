//수강신청
//시간초과로 통과 못함
// const fs = require("fs");
// const [tc, ...input] = fs
//   .readFileSync("./Baekjoon/input.txt")
//   .toString()
//   .trim()
//   .split("\n");

// const [K, L] = tc.toString().split(" ");

// const list = [];

// for (let i = 0; i < L; i++) {
//   if (list.indexOf(input[i]) > 0) {
//     let idx = list.indexOf(input[i]);
//     list.splice(idx, 1);
//   }
//   list.push(input[i]);
// }

// console.log(list.slice(0, K).join("\n"));

//(1)
const fs = require("fs");
const [tc, ...input] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

function solution(k, l, arr) {
  const set = new Set();
  for (const x of arr) {
    if (set.has(x)) {
      set.delete(x);
    }
    set.add(x);
  }
  return [...set].slice(0, k).join("\n");
}

const [K, L] = tc.split(" ").map(Number);

console.log(solution(K, L, input));
