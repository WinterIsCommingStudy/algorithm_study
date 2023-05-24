//완주하지 못한 선수
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
);

// (1) --> map 활용
//완주한 선수들은 (+1) + (-1) = 0 으로 저장된다.
//동명이인이 있다면, (+1)*2 + (-1) = 1로 저장된다.
//완주하지 못했다면, (+1) + (-1)*0 = 1로 저장된다.
//=> value가 0보다 크면 완주하지 못한 선수이다.
// function solution(participant, completion) {
//   const map = new Map();

//   for (let i = 0; i < participant.length; i++) {
//     let a = participant[i],
//       b = completion[i];

//     map.set(a, (map.get(a) || 0) + 1);
//     map.set(b, (map.get(b) || 0) - 1);
//   }

//   for (let [k, v] of map) {
//     if (v > 0) return k;
//   }

//   return "nothing";
// }
