// [3차] 방금그곡
function solution(m, musicinfos) {
  const res = [];

  musicinfos.forEach((musicinfo) => {
    const [start, end, title, melody] = musicinfo.split(",");

    // 플레이 타임 구하기
    const [startH, startM] = start.split(":").map((x) => +x);
    const [endH, endM] = end.split(":").map((x) => +x);
    const playTime = (endH - startH) * 60 + (endM - startM);

    // 전체 멜로디 문자열 구하기
    let wholeMelody = "";
    let wholeMelodyLen = 0;
    let i = 0;
    while (wholeMelodyLen !== playTime) {
      wholeMelody += melody[i % melody.length];
      if (melody[(i % melody.length) + 1] === "#") {
        wholeMelody += melody[(i % melody.length) + 1];
        i++;
      }
      wholeMelodyLen++;
      i++;
    }

    // 조건이 일치하는 문자열을 찾았는데 끝에 #이 있는 경우 | ex) CCB#CCB
    const isOk = (m) => {
      return wholeMelody.search(m);
    };

    while (isOk(m) > -1) {
      if (wholeMelody[isOk(m) + m.length] === "#") {
        wholeMelody = wholeMelody.substring(isOk(m) + m.length + 1);
      } else {
        break;
      }
    }

    // 조건이 완전히 일치하는 음악이 있다면
    if (isOk(m) > -1) {
      if (res.length === 0) {
        res.push(title, playTime);
      } else {
        if (playTime > res[1]) {
          res[0] = title;
          res[1] = playTime;
        }
      }
    }
  });

  return res.length === 0 ? "(None)" : res[0];
}

// (1) : #을 소문자로 변환하여 풀이
// const solution = (m, musicInfos) => {
//   let answer = "";

//   musicInfos = musicInfos.map((e) => {
//     let eArr = e.split(",");
//     let timeDiff =
//       (new Date(`1970-01-01 ${eArr[1]}:00`) -
//         new Date(`1970-01-01 ${eArr[0]}:00`)) /
//       60000;
//     let melody = eArr[3].replace(/[A-Z]#/g, (m) => m[0].toLowerCase());
//     melody = melody
//       .repeat(Math.ceil(timeDiff / melody.length))
//       .substr(0, timeDiff);
//     return `${timeDiff},${eArr[2]},${melody}`;
//   });

//   musicInfos.sort((a, b) => b.split(",")[0] - a.split(",")[0]);

//   answer = musicInfos.filter(
//     (e) =>
//       e
//         .split(",")[2]
//         .indexOf(m.replace(/[A-Z]#/g, (m) => m[0].toLowerCase())) != -1
//   );

//   return answer.length == 0 ? "(None)" : answer[0].split(",")[1];
// };

console.log(
  solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"])
);
console.log(
  solution("CC#BCC#BCC#BCC#B", [
    "03:00,03:30,FOO,CC#B",
    "04:00,04:08,BAR,CC#BCC#BCC#B",
  ])
);
console.log(
  solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"])
);
console.log(
  solution("CCB", ["03:00,03:10,FOO,CCB#CCB", "04:00,04:08,BAR,ABC"])
);
