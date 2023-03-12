//올바른 괄호
function solution(s) {
  const input = s.split("");
  let count = 0;
  if (input.length % 2 === 1 || input[0] === ")") return false;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") {
      count += 1;
    } else {
      count -= 1;
      if (count < 0) return false;
    }
  }
  const result = count != 0 ? false : true;
  return result;
}

console.log(solution("(())()"));

//(1)
// function solution(s) {
//   let cum = 0;
//   for (let paren of s) {
//     cum += paren === "(" ? 1 : -1;
//     if (cum < 0) {
//       return false;
//     }
//   }
//   return cum === 0 ? true : false;
// }
