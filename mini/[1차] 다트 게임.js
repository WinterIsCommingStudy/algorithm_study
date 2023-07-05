// [1차] 다트 게임
// https://www.notion.so/1-17682-c1b0671bb6114373a97a17b483b4a9f8?pvs=4
// 2시간 소요됨...................
// 해설 : 문자열 처리String Manipulation를 묻는 문제입니다. 앞에서부터 한 글자씩 잘라서 처리할 수 있고, 또는 간단한 컴파일러를 만들듯이 토큰화Tokenizing와 의미 분석Semantic Analysis을 통해 어렵지 않게 계산할 수 있습니다. 토큰화로 처리할 때는 정규식을 사용하면 비교적 쉽게 잘라낼 수 있습니다.
// function solution(dartResult) {
//   const Bonus = ["S", "D", "T"];

//   let dartSet = "";
//   const dartArr = [];
//   // (현재 문자가 숫자가 아님) && (다음 문자가 숫자이거나 마지막 요소) 이면 문자열 자르기 --> 10일 경우
//   dartResult.split("").forEach((elem, idx) => {
//     dartSet += elem;
//     if (
//       !Number.isInteger(+elem) &&
//       (Number.isInteger(+dartResult[idx + 1]) || idx === dartResult.length - 1)
//     ) {
//       dartArr.push(dartSet);
//       dartSet = "";
//     }
//   });

//   function calculate(arr) {
//     let scoreArr = [];
//     arr.forEach((elem, idx) => {
//       let score = 0;
//       let sc = "";
//       let bo = "";
//       let op = "";

//       elem.split("").forEach((elem, idx) => {
//         if (Number.isInteger(+elem)) {
//           sc += elem;
//         } else if (Bonus.includes(elem)) {
//           bo += elem;
//         } else {
//           op += elem;
//         }
//       });

//       function checkBonus(sc, bo) {
//         if (bo === "S") {
//           score += +sc;
//         } else if (bo === "D") {
//           score += Math.pow(+sc, 2);
//         } else if (bo === "T") {
//           score += Math.pow(+sc, 3);
//         }
//       }
//       checkBonus(sc, bo);
//       scoreArr.push(score);
//       function checkOption(op) {
//         if (op === "*") {
//           scoreArr[scoreArr.length - 1] = scoreArr[scoreArr.length - 1] * 2;
//           if (scoreArr.length !== 1) {
//             scoreArr[scoreArr.length - 2] = scoreArr[scoreArr.length - 2] * 2;
//           }
//         } else if (op === "#") {
//           scoreArr[scoreArr.length - 1] = -score;
//         }
//       }

//       checkOption(op);
//     });

//     return scoreArr.reduce((acc, cur) => acc + cur);
//   }
//   return calculate(dartArr);
// }

console.log(solution("1S1S10S#"));
console.log(solution("1S*2T*3S"));

// (1)
function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 },
    options = { "*": 2, "#": -1, undefined: 1 };

  let darts = dartResult.match(/\d\d?.?\D/g);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

    console.log(i, darts, darts[i - 1]);

    if (split[3] === "*" && darts[i - 1]) darts[i - 1] *= options["*"];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}
