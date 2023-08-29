function solution(total, n, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let flag = 0;
  //   let arrSum = arr.reduce((x, y) => {
  //     return x + y;
  //   }, 0);

  function DFS(L, sum) {
    if (sum > total) return;
    if (L === n) {
      if (sum > answer) {
        answer = Math.max(answer, sum);
        return;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(259, 5, [81, 58, 42, 33, 61]));
