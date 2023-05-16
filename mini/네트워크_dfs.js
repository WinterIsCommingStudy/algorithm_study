function solution(n, computers) {
  let visited = [false];
  let answer = 0;

  function dfs(i) {
    visited[i] = true;
    for (let j = 0; j < computers[i].length; j++) {
      if (computers[i][j] === 1 && !visited[j]) {
        dfs(j);
      }
    }
  }

  for (let i = 0; i < computers.length; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }
  return answer;
}

//
// function solution(n, computers) {
//   let answer = 0;
//   const length = computers.length;
//   const visited = Array.from({ length: n }, () => false);

//   function dfs(index) {
//     visited[index] = true;

//     for (let i = 0; i < length; i++) {
//       if (computers[index][i] && !visited[i]) {
//         dfs(i);
//       }
//     }
//   }

//   for (let i = 0; i < length; i++) {
//     if (!visited[i]) {
//       dfs(i);
//       answer++;
//     }
//   }

//   return answer;
// }
