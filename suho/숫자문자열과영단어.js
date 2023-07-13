function solution(s) {
  const numberEnglish = new Map();
  const english = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  english.forEach((eng, i) => {
    numberEnglish.set(eng, i);
  });

  let result = s;

  function a(result) {
    let res = result;
    if (!isNaN(res)) {
      return res;
    }
    for (const [eng, idx] of numberEnglish) {
      res = res.replace(eng, idx);
    }
    return a(res);
  }

  result = a(result);
  return parseInt(result);
}

solution("oneoneone4seveneight");
