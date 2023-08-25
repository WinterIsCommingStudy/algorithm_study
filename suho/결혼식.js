function solution(N, arr) {
  let answer = 0;
  let count = 0;
  let T_line = [];

  arr.map((x) => {
    T_line.push([x[0], "s"]);
    T_line.push([x[1], "e"]);
  });
  T_line.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1].charCodeAt() - b[1].charCodeAt();
    } else {
      return a[0] - b[0];
    }
  });

  T_line.map((x) => {
    if (x[1] === "s") {
      count++;
      answer = Math.max(answer, count);
    } else {
      return count--;
    }
  });

  return answer;
}

console.log(
  solution(5, [
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
