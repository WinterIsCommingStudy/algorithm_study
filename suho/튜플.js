function solution(s) {
  var answer = [];

  let num = s.match(/\d+/g).map(Number);
  const tupleHash = new Map();

  for (let x of num) {
    if (tupleHash.has(x)) {
      tupleHash.set(x, tupleHash.get(x) + 1);
    } else {
      tupleHash.set(x, 1);
    }
  }

  let a = [...tupleHash];
  let b = a.sort((a, b) => b[1] - a[1]); // value값 기준 내림차순정렬

  b.map((x) => {
    answer.push(x[0]);
  });

  return answer;
}

// solution("{{123}}");
solution("{{1,2,3},{2,1},{1,2,4,3},{2}}");
