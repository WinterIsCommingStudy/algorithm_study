// input값 처리
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
[k, ...numbers] = input;
k = parseInt(k);
numbers = numbers.map((num) => parseInt(num));

solution(k, numbers);

// 문제 풀이
function solution(k, numbers) {
  const stack = [];

  for (let i=0; i < k; i++) {
    if (numbers[i] === 0) {
      stack.pop();
    } else {
      stack.push(numbers[i]);
    }
  }

  let sum = stack.length ? stack.reduce((acc, cur) => acc + cur, 0) : 0;
  console.log(sum);
}
