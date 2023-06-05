const fs = require("fs");
const input = fs.readFileSync("suho/input.txt").toString().trim("").split("\n");

function solution(N, K, coinArr) {
  let money = K;
  let result = 0;
  for (let i = 0; i < N; i++) {
    if (money >= coinArr[i]) {
      let cnt = Math.floor(money / coinArr[i]);
      if (cnt !== 0) {
        money = money - coinArr[i] * cnt;
        result += cnt;
      }
    }
  }
  return result;
}

const [N, K] = input.shift().split(" ");
const coin = input.map(Number);
const coinArr = coin.sort((a, b) => b - a);
console.log(solution(N, K, coinArr));
