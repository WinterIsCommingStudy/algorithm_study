function solution(n, arr) {
  let answer = "NO";
  let flag = 0;
  let arrSum = arr.reduce((x, y) => {
    return x + y;
  }, 0);

  function DFS(L, sum) {
    if (flag) return;
    if (L === n) {
      if (arrSum - sum === sum) {
        answer = "YES";
        flag = 1;
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

console.log(solution(6, [1, 3, 5, 6, 7, 10]));
