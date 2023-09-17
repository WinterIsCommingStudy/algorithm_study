function solution(n, m) {
  let answer = [];

  let result = Array.from({ length: m }, () => 0);
  function DFS(L) {
    if (L === m) {
      answer.push([...result]);
    } else {
      for (let i = 1; i <= n; i++) {
        result[L] = i;
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  return answer;
}

console.log(solution(5, 3));
