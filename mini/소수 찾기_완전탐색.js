//소수 찾기
// 순열 : https://velog.io/@devjade/JavaScript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
function solution(numbers) {
  numbers = numbers.split("").map((x) => +x);

  function getPermutations(arr, selectNum) {
    const results = [];
    if (selectNum === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutations(rest, selectNum - 1);
      const attached = permutations.map((el) => [fixed, ...el]);
      results.push(...attached);
    });
    return results;
  }

  function isPrimeNum(num) {
    if (num === 0 || num === 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let count = 0;
  const allNums = [];
  for (let i = 1; i <= numbers.length; i++) {
    const combineNums = getPermutations(numbers, i).map((a) => +a.join(""));
    allNums.push(...combineNums);
  }

  const set = new Set(allNums);
  const result = [...set].map((a) => {
    if (isPrimeNum(a) === true) count++;
  });

  return count;
}

console.log(solution("17"));
console.log(solution("011"));
