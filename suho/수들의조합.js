// function solution(arr, n, m) {
//   let answer = [];
//   let tmp = Array.from({ length: n }, () => 0);
//   let sum = 0;

//   function DFS(L, S) {
//     if (L === n) {
//       sum = tmp.reduce((a, b) => {
//         return a + b;
//       }, 0);
//       if (sum % m === 0) {
//         console.log(tmp);
//         answer++;
//       }
//     } else {
//       for (let i = S; i < arr.length; i++) {
//         tmp[L] = arr[i];
//         DFS(L + 1, i + 1);
//       }
//     }
//   }

//   DFS(0, 0);

//   return answer;
// }

// console.log(solution([2, 4, 5, 8, 12], 3, 6));

function solution(arr, n, m) {
  let answer = [];
  let tmp = Array.from({ length: n }, () => 0);

  function DFS(L, S, sum) {
    if (L === n) {
      if (sum % m === 0) {
        answer++;
      }
    } else {
      for (let i = S; i < arr.length; i++) {
        tmp[L] = arr[i];
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0, 0);

  return answer;
}
console.log(solution([2, 4, 5, 8, 12], 3, 6));
