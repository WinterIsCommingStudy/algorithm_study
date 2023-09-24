function solution(user_id, banned_id) {
  const answer = new Set();
  const bannedLength = banned_id.length;
  const checkArr = Array(user_id.length).fill(0);

  function isMatch(user, banned) {
    if (user.length !== banned.length) return false;

    for (let i = 0; i < user.length; i++) {
      if (banned[i] !== "*" && user[i] !== banned[i]) return false;
    }
    return true;
  }

  function DFS(L, tmp) {
    if (L === bannedLength) {
      const sortedTmp = [...tmp].sort().join(",");
      answer.add(sortedTmp);
      return;
    }

    for (let i = 0; i < user_id.length; i++) {
      if (checkArr[i] === 0 && isMatch(user_id[i], banned_id[L])) {
        checkArr[i] = 1;
        DFS(L + 1, [...tmp, user_id[i]]);
        checkArr[i] = 0;
      }
    }
  }

  DFS(0, []);

  return answer.size;
}

console.log(
  solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"])
);
