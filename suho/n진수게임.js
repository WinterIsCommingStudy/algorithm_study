function solution(n, t, m, p) {
  let answer;
  let i = 0;
  let turn = 1;
  let result = [];

  let decimal = [];
  const a = (i) => {
    const b = i.toString(n).split("");
    b.map((i) => {
      decimal.push(i);
    });
    return b;
  };
  let myTurn = 0;

  let num = 1;
  while (t > result.length) {
    if (decimal.length < 1) {
      decimal = a(i);
      i++;
    }
    if (turn === p || myTurn === turn) {
      result.push(decimal[0]);
      myTurn = p + m * num;
      num++;
    }
    turn++;
    decimal.shift();
  }
  answer = result.join("").toUpperCase();
  return answer;
}

solution(16, 16, 2, 2);
