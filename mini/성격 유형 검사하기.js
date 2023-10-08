function solution(survey, choices) {
  const scores = { A: 0, C: 0, F: 0, J: 0, M: 0, N: 0, R: 0, T: 0 };
  for (let i = 0; i < survey.length; i++) {
    const score = survey[i].split("");
    if (choices[i] > 4) {
      scores[score[1]] += choices[i] % 4;
    } else {
      scores[score[0]] += 4 - choices[i];
    }
  }

  let result = "";
  const types = ["RT", "CF", "JM", "AN"];
  types.forEach((type) => {
    type = type.split("");
    result += scores[type[0]] >= scores[type[1]] ? type[0] : type[1];
  });

  return result;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
console.log(solution(["TR", "RT", "TR"], [7, 1, 3]));

// (1)
// function solution(survey, choices) {
//   const MBTI = {};
//   const types = ["RT", "CF", "JM", "AN"];

//   types.forEach((type) => type.split("").forEach((char) => (MBTI[char] = 0)));

//   choices.forEach((choice, index) => {
//     const [disagree, agree] = survey[index];

//     MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
//   });

//   return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join("");
// }
