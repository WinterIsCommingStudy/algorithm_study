const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const len = parseInt(input.shift());

// 큐와 출력 배열 생성
const queue = [];
const result = [];

for (let i=0; i < len; i++) {
  if (input[i].includes("push")) {
    const [cmd, num] = input[i].split(" ");
    queue.push(parseInt(num));

  } else if (input[i].includes("pop")) {
    if (queue.length > 0) {
      const num = queue.shift();
      result.push(num);
    } else {
      result.push(-1);
    }

  } else if (input[i].includes("size")) {
    result.push(queue.length);

  } else if (input[i].includes("empty")) {
    if (queue.length === 0) {
      result.push(1);
    } else {
      result.push(0);
    }

  } else if (input[i].includes("front")) {
    if (queue.length === 0) {
      result.push(-1);
    } else {
      result.push(queue[0]);
    }

  } else if (input[i].includes("back")) {
    if (queue.length === 0) {
      result.push(-1);
    } else {
      result.push(queue[queue.length -1]);
    }
  }
}

console.log(result.join("\n"));
