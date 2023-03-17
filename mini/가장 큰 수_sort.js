// 가장 큰 수
function solution(numbers) {
  var answer = "";
  answer = numbers
    .map((x) => x + "")
    .sort((a, b) => b + a - (a + b))
    .join("");
  if (answer[0] === "0") answer = "0";
  return answer;
}

// function solution(numbers) {
//   var answer = "";
//   numbers = numbers.map((x) => x + "");
//   numbers.sort((a, b) => {
//     console.log("a : ", a, " / b :", b);
//     console.log("b+a : ", b + a);
//     console.log("a+b : ", a + b);
//     console.log(b + a - (a + b));
//     return b + a - (a + b);
//   });
//   answer = numbers.join("");
//   if (answer[0] === "0") answer = "0";
//   return answer;
// }

console.log(solution([6, 10, 2]));

// const arr = [1, 6, 3, 8, 2, 4];
// arr.sort((a, b) => {
//   console.log("a:", a, " / b:", b);
//   return a - b;
// });
// console.log(arr);
