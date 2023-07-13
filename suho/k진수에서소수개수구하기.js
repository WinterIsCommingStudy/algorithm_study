function solution(n, k) {
  var answer = [];
  const decimal = n.toString(k).split("0").map(Number);
  decimal.map((k) => {
    if (k >= 2) {
      for (let i = 2; i <= Math.floor(Math.sqrt(k)); i++) {
        if (k % i === 0) {
          return false;
        }
      }
      return answer.push(k);
    }
  });
  return answer.length;
}

solution(110011, 10);
