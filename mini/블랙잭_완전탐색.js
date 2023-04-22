// 블랙잭
const fs = require("fs");
const input = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map((x) => +x);
const cards = input[1].split(" ").map((x) => +x);

function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
}

const seletCards = getCombinations(cards, 3);

let sum = 0;
let answer = 0;

seletCards.forEach((cards) => {
  sum = cards.reduce((a, b) => (a += b));
  if (sum <= M && sum > answer) answer = sum;
});

console.log(answer);

// (1)
// const fs = require("fs");
// const input = fs
//   .readFileSync("./Baekjoon/input.txt")
//   .toString()
//   .trim()
//   .split("\n");

// const [N, M] = input[0].split(" ").map((x) => +x);
// const cards = input[1].split(" ").map((x) => +x);
// let answer = 0;

// for (let i = 0; i < N; i++) {
//   for (let j = i + 1; j < N; j++) {
//     for (let k = j + 1; k < N; k++) {
//       const sum = cards[i] + cards[j] + cards[k];
//       if (sum <= M && sum > answer) {
//         answer = sum;
//       }
//     }
//   }
// }
// console.log(answer);
