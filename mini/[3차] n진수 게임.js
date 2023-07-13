// [3차] n진수 게임
function solution(n, t, m, p) {
  let num = 0;
  let str = "";
  while (str.length < t * m) {
    str += num.toString(n);
    num++;
  }
  str = str.toUpperCase().split("");

  let result = "";
  str.forEach((elem, idx) => {
    if (result.length < t) {
      if (idx % m === p - 1) {
        result += elem;
      }
    }
  });

  return result;
}

console.log(solution(2, 4, 2, 1));
console.log(solution(16, 16, 2, 1));
console.log(solution(16, 16, 2, 2));

// (1)
// function solution(n, t, m, p) {
//   var tubeT = Array.apply(null, Array(t)).map((a, i) => i * m + p - 1); // [ 0, 2, 4, 6 ]
//   var line = ""; // 011011100101
//   var max = m * t + p;
//   for (var i = 0; line.length <= max; i++) {
//     line += i.toString(n);
//   }

//   return tubeT
//     .map((a) => line[a])
//     .join("")
//     .toUpperCase();
// }
