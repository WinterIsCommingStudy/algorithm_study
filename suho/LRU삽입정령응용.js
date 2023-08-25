function solution(S, N, arr) {
  const answer = Array.from({ length: S }, () => 0);
  arr.forEach((c) => {
    let pos = -1;
    for (let i = 0; i < S; i++) {
      if (c === answer[i]) {
        pos = i;
      }
    }
    if (pos === -1) {
      for (let j = S - 1; j >= 1; j--) {
        answer[j] = answer[j - 1];
      }
    } else {
      for (let j = pos; j >= 1; j--) {
        answer[j] = answer[j - 1];
      }
    }
    answer[0] = c;
  });

  return answer;
}

console.log(solution(5, 9, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
