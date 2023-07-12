// 오픈채팅방
function solution(records) {
  let result = [];
  let users = {};
  records.forEach((record) => {
    const [state, id, name] = record.split(" ");
    if (state !== "Leave") {
      users[id] = name;
    }
  });

  records.forEach((record) => {
    const [state, id, name] = record.split(" ");
    if (state === "Enter") {
      result.push(`${users[id]}님이 들어왔습니다.`);
    } else if (state === "Leave") {
      result.push(`${users[id]}님이 나갔습니다.`);
    }
  });

  return result;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);

// (1)
// function solution(record) {
//   const userInfo = {};
//   const action = []; // 출력할 결과
//   const stateMapping = {
//     Enter: "님이 들어왔습니다.",
//     Leave: "님이 나갔습니다.",
//   };

//   record.forEach((v) => {
//     const [state, id, nick] = v.split(" ");

//     if (state !== "Change") {
//       action.push([state, id]);
//       console.log(action);
//     }

//     if (nick) {
//       // 나가는게 아니라면 (=들어오거나 변경하거나)
//       userInfo[id] = nick;
//     }
//   });

//   return action.map(([state, uid]) => {
//     return `${userInfo[uid]}${stateMapping[state]}`;
//   });
// }

// (2)
// function solution(record) {
//   let ret = [];
//   const uids = new Map();

//   record.forEach((entry) => {
//     let [command, uid, nick] = entry.split(" ");
//     if (command === "Enter" || command === "Change") uids.set(uid, nick);
//     console.log(uids);
//   });

//   record.forEach((entry) => {
//     let [command, uid] = entry.split(" ");
//     if (command === "Enter") ret.push(`${uids.get(uid)}님이 들어왔습니다.`);
//     if (command === "Leave") ret.push(`${uids.get(uid)}님이 나갔습니다.`);
//   });

//   return ret;
// }
