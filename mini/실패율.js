// 실패율
function solution(N, stages) {
  const obj = {};
  let users = stages.length;

  for (let i = 1; i <= N; i++) {
    let user = stages.filter((e) => e === i).length;
    let failure = user / users;
    obj[i] = failure;
    users -= user;
  }

  const sortUser = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  const result = sortUser.map((x) => Number(x[0]));
  return result;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));

// (1)
// object가 아닌 array 풀이.
// function solution(N, stages) {
//   let result = [];
//   for (let i = 1; i <= N; i++) {
//     let reach = stages.filter((x) => x >= i).length;
//     let curr = stages.filter((x) => x === i).length;
//     result.push([i, curr / reach]);
//   }
//   result.sort((a, b) => b[1] - a[1]);
//   return result.map((x) => x[0]);
// }
