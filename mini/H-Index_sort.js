// H-Index
// https://www.ibric.org/myboard/read.php?Board=news&id=270333
// 피인용수가 논문수와 같아지거나 피인용수가 논문수보다 작아지기 시작하는 숫자가 바로 나의 h가 됩니다.

// 이 코드로 통과했는데... 잘못된거 아닌가?
// function solution(citations) {
//   citations.sort((a, b) => b - a);
//   for (let i = 1; i <= citations.length; i++) {
//     console.log("i", i);
//     if (i > citations[i]) {
//       if (i - 1 === citations[i - 1]) {
//         return citations[i - 1];
//       } else {
//         console.log("??");
//         return i;
//       }
//     }
//   }
//   return citations.length;
// }

// 고쳤는데 느림
function solution(citations) {
  citations.sort((a, b) => b - a);

  for (let i = 1; i <= citations.length; i++) {
    if (i > citations[i - 1]) {
      return i - 1;
    }
  }

  return citations.length;
}

console.log(solution([3, 0, 6, 1, 5]));
console.log(solution([4, 0, 6, 1, 5]));
console.log(solution([100, 100, 100])); // 9번 반례 (논문수가 피인용수보다 다 작을 경우)

// (1)
// function solution(citations) {
//   citations = citations.sort(sorting);

//   var i = 0;
//   while (i + 1 <= citations[i]) {
//     i++;
//   }
//   return i;

//   function sorting(a, b) {
//     return b - a;
//   }
// }
