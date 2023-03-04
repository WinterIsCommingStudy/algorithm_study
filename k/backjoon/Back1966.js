// input값 처리
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
[T, ...testcases] = input;

solution(T, testcases);

// 문제 풀이
function solution(T, testcases) {
  const result = [];

  for (let i=0; i < T; i++) {
    let [N, M] = testcases[i * 2].split(' ').map(Number);   // 문서의 개수 N, 현재 큐에서의 위치 M
    const queue = testcases[i * 2 +1].split(' ').map(Number);
    let count = 1;

    while (true) {
      let BIG = Math.max(...queue);
      let FRONT = queue.shift();

      if (BIG <= FRONT && M === 0) {
        console.log(count);
        break;
      } else if (BIG > FRONT && M === 0) {
        queue.push(FRONT);
        M = queue.length -1;
      } else if (BIG > FRONT) {
        queue.push(FRONT);
        M -= 1;
      } else if (BIG <= FRONT) {
        count += 1;
        M -= 1;
      }
    }
  }
}
