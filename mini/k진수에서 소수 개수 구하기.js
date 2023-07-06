// k진수에서 소수 개수 구하기
function solution(n, k) {
  const arr = n
    .toString(k)
    .split(0)
    .filter((x) => +x > 1)
    .map((x) => +x);

  function isPrime(num) {
    for (let i = 2; i <= +Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  const result = arr.filter((x) => isPrime(x) === true).length;
  return result;
}

console.log(solution(437674, 3));
console.log(solution(110011, 10));
