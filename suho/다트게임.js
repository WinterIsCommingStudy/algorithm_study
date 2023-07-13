function solution(dartResult) {
  var answer = 0;
  let num = dartResult.match(/\d+/g);
  let str = dartResult.match(/\D+/g);
  console.log(num, str);
  let score = [0, 0, 0];
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes("S")) score[i] += num[i] ** 1;
    if (str[i].includes("D")) score[i] += num[i] ** 2;
    if (str[i].includes("T")) score[i] += num[i] ** 3;
    if (str[i].includes("*")) {
      score[i - 1] *= 2;
      score[i] *= 2;
    }
    if (str[i].includes("#")) {
      score[i] *= -1;
    }
    console.log(score);
  }

  answer = score.map(Number).reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return answer;
}

solution("1D2S#10S");
