// [1차] 프렌즈4블록
// 중복된 부분이 있기 때문에, 삭제 될 블럭들을 위치로 저장해준다.
// 해결 X | 챗지피티 풀이
function solution(m, n, board) {
  // 문자열을 2차원 배열로 변환하여 판을 초기화한다.
  let gameBoard = board.map((row) => row.split(""));

  // 같은 블록을 찾아서 지우고 빈 공간을 채우는 함수 : 삭제한 블록의 개수를 출력한다.
  function removeBlocks() {
    let removed = 0;
    let deleteSet = new Set();

    // 같은 블록을 찾아서 삭제할 블록들을 deleteSet에 추가한다.
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        const currentBlock = gameBoard[i][j];
        if (currentBlock === "0") continue;
        if (
          currentBlock === gameBoard[i][j + 1] &&
          currentBlock === gameBoard[i + 1][j] &&
          currentBlock === gameBoard[i + 1][j + 1]
        ) {
          deleteSet.add(`${i},${j}`);
          deleteSet.add(`${i},${j + 1}`);
          deleteSet.add(`${i + 1},${j}`);
          deleteSet.add(`${i + 1},${j + 1}`);
        }
      }
    }

    // deleteSet에 있는 블록들을 삭제하고 빈 공간을 채운다.
    deleteSet.forEach((pos) => {
      const [x, y] = pos.split(",").map(Number);
      if (gameBoard[x][y] !== "0") {
        gameBoard[x][y] = "0";
        removed++;
      }
    });

    // 빈 공간을 채우는 로직 : 블록 재배치
    // 아래부터 위로, 왼쪽부터 오른쪽으로 판을 탐색한다.
    for (let i = m - 1; i >= 0; i--) {
      for (let j = 0; j < n; j++) {
        if (gameBoard[i][j] === "0") {
          // 현재 위치가 빈 공간('0')인 경우,
          // 해당 위치에서부터 위로 탐색하면서 가장 가까운 블록을 찾는다.
          for (let k = i - 1; k >= 0; k--) {
            if (gameBoard[k][j] !== "0") {
              gameBoard[i][j] = gameBoard[k][j];
              gameBoard[k][j] = "0";
              break;
            }
          }
        }
      }
    }
    return removed;
  }

  let totalRemoved = 0;
  let removed = removeBlocks();

  // 블록이 더 이상 지워지지 않을 때까지 반복합니다.
  while (removed > 0) {
    totalRemoved += removed;
    removed = removeBlocks();
  }

  return totalRemoved;
}

console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]));
console.log(
  solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])
);
