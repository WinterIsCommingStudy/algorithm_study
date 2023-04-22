const fs = require("fs");
const input = fs.readFileSync("suho/input.txt").toString().trim("").split("\n");

const [n, ...arr] = input;
const [cardCount, sum] = n.split(" ");
const num = arr[0].split(" ").map(Number);

let sumArr = [];

for (let i = 0; i < cardCount; i++) {
  for (let m = i + 1; m < cardCount; m++) {
    for (let j = m + 1; j < cardCount; j++) {
      const numSum = num[i] + num[m] + num[j];
      if (numSum <= sum) {
        sumArr.push(numSum);
      }
    }
  }
}
console.log(Math.max(...sumArr));
