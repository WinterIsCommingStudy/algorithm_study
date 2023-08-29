function solution(m, n, arr) {
  let answer = [];
  let checkArr = Array.from({ length: n }, () => 0);
  let tmp = Array.from({ length: m }, () => 0);

  function DFS(L) {
    if (L === 2) {
      answer.push([...tmp]);
    } else {
      for (let i = 0; i < n; i++) {
        if (checkArr[i] === 0) {
          checkArr[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          checkArr[i] = 0;
        }
      }
    }
  }

  DFS(0);

  return answer;
}

console.log(solution(2, 4, [3, 6, 9, 5]));
