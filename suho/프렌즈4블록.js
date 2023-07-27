function solution(m, n, board) {
  var answer = 0;

  const boardReverse = board.reverse();

  const block = boardReverse.map((b) => {
    return b.split("");
  });

  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n; j++) {
      console.log(block);
      if (
        block[i][j] === block[i + 1][j] &&
        block[i][j + 1] === block[i + 1][j + 1] &&
        block[i][j] === block[i][j + 1] &&
        j + 1 < n
      ) {
        if (block[i][j + 2] === block[i + 1][j + 2]) {
          block[i][j] = 0;
          block[i + 1][j] = 0;
          block[i][j + 1] = 0;
          block[i + 1][j + 1] = 0;
          block[i][j + 2] = 0;
          block[i + 1][j + 2] = 0;
        } else {
          block[i][j] = 0;
          block[i + 1][j] = 0;
          block[i][j + 1] = 0;
          block[i + 1][j + 1] = 0;
        }
      }

      if (block[i][j] === 0) {
        if (block[i - 1] && block[i - 1][j] === 0) {
          block[i - 1][j] = block[i + 1][j];
          block[i + 1][j] = 0;
          if (
            block[i - 2] &&
            block[i - 2][j] === block[i - 1][j] &&
            block[i - 2][j - 1] === block[i - 1][j - 1] &&
            block[i - 2][j - 1]
          ) {
            block[i - 2][j - 1] = 0;
            block[i - 1][j - 1] = 0;
            block[i - 2][j] = 0;
            block[i - 1][j] = 0;
          } else if (
            block[i - 2] &&
            block[i - 2][j] === block[i - 1][j] &&
            block[i - 2][j + 1] === block[i - 1][j + 1]
          ) {
            block[i - 2][j] = 0;
            block[i - 1][j] = 0;
            block[i - 2][j + 1] = 0;
            block[i - 1][j + 1] = 0;
          }
        }
      }
    }
  }
  console.log(block);

  return answer;
}

solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]);
// solution(4, 5, ["CCDCE", "CCAAB", "CCAAB", "CCFFF"]);
