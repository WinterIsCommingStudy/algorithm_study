function solution(n, t, m, p) {
  let answer;
  let i = 0;
  let turn = 1;
  let result = [];
  let decimal = [];
  const decimalArray = (i) => {
    const array = i.toString(n).split("");
    array.map((i) => {
      decimal.push(i);
    });
    return array;
  };
  let myTurn = 0;

  let num = 1;
  while (t > result.length) {
    if (decimal.length < 1) {
      decimal = decimalArray(i);
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
