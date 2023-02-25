const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const len = parseInt(input.shift());

// 스택과 출력 배열 생성
const stack = [];
const result = [];

for (let i=0; i < len; i++) {
  if (input[i].includes("push")) {
    const [cmd, num] = input[i].split(" ");
    stack.push(parseInt(num));

  } else if (input[i].includes("pop")) {
    if (stack.length > 0) {
      const num = stack.pop();
      result.push(num);
    } else {
      result.push(-1);
    }

  } else if (input[i].includes("size")) {
    result.push(stack.length);

  } else if (input[i].includes("empty")) {
    if (stack.length === 0) {
      result.push(1);
    } else {
      result.push(0);
    }

  } else if (input[i].includes("top")) {
    if (stack.length === 0) {
      result.push(-1);
    } else {
      result.push(stack[stack.length -1]);
    }
  }
}

console.log(result.join("\n"));
