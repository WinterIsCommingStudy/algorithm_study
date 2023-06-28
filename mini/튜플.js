// 튜플
function solution(s) {
  const result = [];
  const tuples = s
    .slice(2, -2)
    .split("},{")
    .sort((a, b) => a.length - b.length);

  tuples.forEach((x) => {
    let tuple = x.split(",");
    result.push(tuple.find((e) => !result.includes(e)));
  });

  return result.map((x) => +x);
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
// console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
// console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"));

// (1)
// function solution(s) {
//   return JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"))
//     .sort((a, b) => a.length - b.length)
//     .reduce((arr, v, n) => {
//       if (n) {
//         return arr.concat(v.filter((f) => !arr.includes(f)));
//       }
//       return v;
//     }, []);
// }
