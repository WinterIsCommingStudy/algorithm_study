function solution(arr) {
  const answer = arr;

  for (i = 0; i < answer.length - 1; i++) {
    for (j = 0; j < answer.length - i - 1; j++) {
      if (answer[j + 1] < 0 && answer[j] > 0) {
        [answer[j], answer[j + 1]] = [answer[j + 1], answer[j]];
      }
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]));
