//프린터 큐
const fs = require("fs");
const [k, ...input] = fs
  .readFileSync("./Baekjoon/input.txt")
  .toString()
  .trim()
  .split("\n");

arr = input.map((x) => x.split(" ").map(Number));
let answer = "";

for (let i = 0; i < arr.length; i += 2) {
  let count = 0;
  const queueList = arr[i + 1];
  let target = arr[i][1];

  while (true) {
    const max = Math.max(...queueList);
    const number = queueList.shift();
    if (number === max) {
      count++;
      if (target === 0) {
        answer += count + "\n";
        break;
      }
    } else {
      queueList.push(number);
    }

    if (target === 0) {
      target = queueList.length - 1;
    } else {
      target--;
    }
  }
}

console.log(answer);
