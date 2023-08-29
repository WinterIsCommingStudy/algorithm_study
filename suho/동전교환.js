function solution(n, coin, result) {
  let answer = Number.MAX_SAFE_INTEGER;

  function DFS(L, sum) {
    if (sum > result || L >= answer) return;
    if (sum === result) {
      console.log(L, sum);
      answer = Math.min(answer, L);
      return;
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + coin[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(3, [1, 2, 5], 15));
