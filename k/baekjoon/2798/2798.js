// input값 처리
const input = require('fs').readFileSync('/dev/stdin')
  .toString().trim().split(/\s/).map((v) => +v);  // 정수화
[N, M, ...cards] = input;

console.log(solution(N, M, cards));

// 블랙잭 최대값 메소드
function solution(N, M, cards) {
  let max = 0;

  for (let i=0; i < N-2; i++) {      // 1번째 카드
    for (let j=i+1; j < N-1; j++) {  // 2번째 카드
      for (let k=j+1; k < N; k++) {  // 3번째 카드
        let sum = cards[i] + cards[j] + cards[k];

        if (M === sum) {
          return sum;
        } else if (max < sum && sum < M) {
          max = sum;
        }
      }
    }
  }
  return max;
}
