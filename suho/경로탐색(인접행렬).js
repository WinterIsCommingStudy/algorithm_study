// function solution(arr, N, M) {
//   let answer = 0;
//   let graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
//   let ch = Array.from({ length: N + 1 }, () => 0);
//   for ([a, b] of arr) {
//     graph[a][b] = 1;
//   }

//   let path = [];

//   function DFS(v) {
//     if (v === N) {
//       answer++;
//     } else {
//       for (let i = 1; i <= N; i++) {
//         if (graph[v][i] === 1 && ch[i] === 0) {
//           ch[i] = 1;
//           path.push(i);
//           DFS(i);
//           ch[i] = 0;
//           path.pop();
//         }
//       }
//     }
//   }
//   path.push(1);
//   ch[1] = 1;
//   DFS(1);

//   return answer;
// }

// console.log(
//   solution(
//     [
//       [1, 2],
//       [1, 3],
//       [1, 4],
//       [2, 1],
//       [2, 3],
//       [2, 5],
//       [3, 4],
//       [4, 2],
//       [4, 5],
//     ],
//     5,
//     9
//   )
// );

//인접리스트
function solution(arr, N, M) {
  let answer = 0;
  let graph = Array.from(Array(N + 1), () => Array());
  let ch = Array.from({ length: N + 1 }, () => 0);
  for ([a, b] of arr) {
    graph[a].push(b);
  }

  let path = [];

  function DFS(v) {
    if (v === N) {
      console.log(path);
      answer++;
    } else {
      for (let i = 0; i < graph[v].length; i++) {
        if (ch[graph[v][i]] === 0) {
          //graph[v][i]이값이 정점의 값
          ch[graph[v][i]] = 1;
          path.push(graph[v][i]);
          DFS(graph[v][i]);
          ch[graph[v][i]] = 0;
          path.pop();
        }
      }
    }
  }
  path.push(1);
  ch[1] = 1;
  DFS(1);

  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 1],
      [2, 3],
      [2, 5],
      [3, 4],
      [4, 2],
      [4, 5],
    ],
    5,
    9
  )
);
