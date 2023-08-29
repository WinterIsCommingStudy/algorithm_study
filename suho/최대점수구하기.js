function solution(n, arr) {
  let answer = Number.MIN_SAFE_INTEGER;

  function DFS(L, point, time) {
    if (time > n[1]) return;
    if (L === n[0]) {
      answer = Math.max(answer, point);
    } else {
      DFS(L + 1, point + arr[L][0], time + arr[L][1]);
      DFS(L + 1, point, time);
    }
  }
  DFS(0, 0, 0);
  return answer;
}

console.log(
  solution(
    [5, 20],
    [
      [10, 5],
      [25, 12],
      [15, 8],
      [6, 3],
      [7, 4],
    ]
  )
);
