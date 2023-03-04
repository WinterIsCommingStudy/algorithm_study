const input = require('fs').readFileSync('/dev/stdin').toString();
const N = parseInt(input);   // 정수 N
let creator = 0;           // 생성자

for (let i = 1; i <= N; i++) {
    let num = i;
    let sum = 0;  // 각 자리수 합
    
    while (num !== 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    
    // 가장 작은 생성자 찾기
    if (i + sum === N) {
        creator = i;
        break;
    }
}
console.log(creator);
