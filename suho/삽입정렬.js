function solution(arr) {
  const answer = arr;

  for (let i = 1; i < answer.length; i++) {
    let j;
    let tmp = answer[i];
    for (j = i - 1; j >= 0; j--) {
      if (answer[j] > tmp) {
        answer[j + 1] = answer[j];
      } else {
        break;
      }
    }
    answer[j + 1] = tmp;
  }

  return answer;
}

console.log(solution([11, 7, 5, 6, 10, 9]));
