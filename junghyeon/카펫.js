function solution(brown, yellow) {
  let answer = [];
  const sum = brown + yellow;

  for (let i = 3; i <= sum; i++) {
    if (sum % i === 0) {
      const width = sum / i;
      const height = i;

      if ((width - 2) * (height - 2) === yellow) {
        answer = [width, height];
        break;
      }
    }
  }

  return answer;
}
