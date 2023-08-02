// 크레인 인형뽑기 게임
// 40min(+3)
function solution(board, moves) {
  let box = [];
  let result = 0;
  moves.forEach((move, idx) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1] !== 0) {
        if (box[box.length - 1] === board[i][move - 1]) {
          result += 2;
          box.pop();
        } else {
          box.push(board[i][move - 1]);
        }
        board[i][move - 1] = 0;
        break;
      }
    }
  });
  return result;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
