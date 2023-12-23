function solution(n, v) {
  let answer = [];
  let checkArr = Array.from({ length: n + 1 }, () => 0);
  function DFS(v) {
    if (v === n + 1) {
      let tmp = "";
      for (let i = 1; i < checkArr.length; i++) {
        if (checkArr[i] === 1) {
          tmp += i;
        }
      }
      if (tmp.length) {
        answer.push(tmp);
      }
    } else {
      checkArr[v] = 1;
      DFS(v + 1);
      checkArr[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(v);
  console.log(answer);
  return answer.length;
}

console.log(solution(3, 1));
