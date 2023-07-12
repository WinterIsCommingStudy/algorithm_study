function solution(record) {
  var answer = [];

  const userHash = new Map();

  const enterOfchange = (user) => {
    const userInfo = user.split(" ");
    const id = userInfo[1];
    const nickname = userInfo[2];
    userHash.set(id, nickname);
  };

  const userNickname = (user) => {
    const userInfo = user.split(" ");
    const id = userInfo[1];

    const nickname = userHash.get(id);
    return nickname;
  };

  const userSetting = (rec) => {
    record.map((rec) => {
      if (rec.includes("Enter") || rec.includes("Change")) {
        enterOfchange(rec);
      }
    });
  };

  const chatRsult = (record) => {
    record.map((rec) => {
      if (rec.includes("Enter")) {
        const Nickname = userNickname(rec);
        answer.push(`${Nickname}님이 들어왔습니다.`);
      }
      if (rec.includes("Leave")) {
        const Nickname = userNickname(rec);
        answer.push(`${Nickname}님이 나갔습니다.`);
      }
    });
  };

  userSetting(record);
  chatRsult(record);

  return answer;
}

solution([
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
]);
