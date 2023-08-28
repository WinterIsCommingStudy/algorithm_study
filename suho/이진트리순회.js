function solution(v) {
  let answer;
  function DFS(v) {
    if (v > 7) return;
    else {
      //   console.log(v);//1245367 전위순회
      DFS(v * 2); //왼쪽노드
      //   console.log(v); //4251637 중위순회
      DFS(v * 2 + 1); //오른쪽 노드
      //   console.log(v); //4526731 후위순회
    }
  }
  DFS(v);

  return answer;
}

console.log(solution(1));
