// [3차] 압축
// 1시간 30분 (+1)
function solution(msg) {
  // 사전 object 생성
  const dict = {};
  function initializeDictionary() {
    const arr = Array.from({ length: 26 }, (_, i) => i + 65);
    arr.forEach((e, i) => {
      dict[i + 1] = String.fromCharCode(e);
    });
    return dict;
  }
  initializeDictionary();

  msg = msg.split("");
  let result = [];

  for (let i = 0; i < msg.length; i++) {
    let curr = msg[i];
    let next = curr + msg[i + 1];
    // msg배열 다 돌면 배열 출력
    if (!msg[i + 1]) {
      result.push(Object.values(dict).indexOf(curr) + 1);
      return result;
    }

    // j는 next의 다음을 가리킨다.
    let j = i + 2;
    while (Object.values(dict).find((x) => x === next)) {
      curr = next;
      next = curr + msg[j];
      i++, j++; // i++ 하는 이유 : 다음 for문을 돌 때, 해당 문자열은 선택되면 안되기 때문이다. 삭제 하는 대신에 해당 문자열을 건너뛰기 위함.
    }
    // ==> curr에 가장 긴 문자열이 담긴다.

    result.push(Object.values(dict).indexOf(curr) + 1); // 가장 긴 문자열 색인 출력
    dict[Object.keys(dict).length + 1] = next; // 사전에 없는 문자열 사전에 등록
  }
  return result;
}

console.log(solution("KAKAO"));
// console.log(solution("TOBEORNOTTOBEORTOBEORNOT"));

// (1) reduce 익숙해지자
// function solution(msg) {
//   const answer = [];
//   let nextWord = "";
//   let lastCount = 27;
//   const dir = {
//     A: 1,
//     B: 2,
//     C: 3,
//     D: 4,
//     E: 5,
//     F: 6,
//     G: 7,
//     H: 8,
//     I: 9,
//     J: 10,
//     K: 11,
//     L: 12,
//     M: 13,
//     N: 14,
//     O: 15,
//     P: 16,
//     Q: 17,
//     R: 18,
//     S: 19,
//     T: 20,
//     U: 21,
//     V: 22,
//     W: 23,
//     X: 24,
//     Y: 25,
//     Z: 26,
//   };
//   const s = msg.split("").reduce((acc, cur) => {
//     nextWord = acc + cur;
//     if (dir[nextWord] === undefined) {
//       dir[nextWord] = lastCount++;
//     } else {
//       return acc + cur;
//     }

//     if (dir[acc] !== undefined) answer.push(dir[acc]);
//     return cur;
//   });

//   answer.push(dir[s]);

//   return answer;
// }
