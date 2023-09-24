function solution(arr1, arr2) {
  let answer = [];
  let arr1Sort = arr1.sort((a, b) => a - b);
  let arr2Sort = arr2.sort((a, b) => a - b);

  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1Sort.length && p2 < arr2Sort.length) {
    if (arr1Sort[p1] === arr2Sort[p2]) {
      answer.push(arr1Sort[p1++]);
      p2++;
    } else {
      arr1Sort[p1] < arr2Sort[p2] ? p1++ : p2++;
    }
  }
  return answer;
}

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
