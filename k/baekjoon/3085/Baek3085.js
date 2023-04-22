// input값 처리
const input = require('fs').readFileSync('/dev/stdin')
  .toString().trim().split('\n');
const N = Number(input[0]);
const board = input.slice(1).map(v => v.split(''));

let maxCount = 0;

// 좌, 우, 상, 하 방향
const steps = [[-1, 0], [1, 0], [0, -1], [0, 1]];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < 4; k++) {  // 4개 방향이므로
      let nx = i + steps[k][0];
      let ny = j + steps[k][1];

      // 보드를 벗어난다면
      if (nx < 0 || nx >= N || ny < 0 || ny >= N) {
        continue;
      }
      // 인접한 두 칸의 사탕 색이 다르다면 바꿔주기
      if (board[i][j] !== board[nx][ny]) {
        [board[nx][ny], board[i][j]] = [board[i][j], board[nx][ny]];
        // 최댓값 계산
        maxCount = Math.max(maxCount, count_candy());
        // 원위치
        [board[i][j], board[nx][ny]] = [board[nx][ny], board[i][j]];
      }
    }
  }
}

// 최대 개수 세는 메서드
function count_candy() {
  let [row_cnt, col_cnt, row_max, col_max] = [1, 1, -1e9, -1e9];

  // 행(row) 계산
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N-1; j++) {
      // 동일한 색상이라면
      if (board[i][j] === board[i][j+1]) {
        row_cnt++;
      } else {
        row_cnt = 1;
      }
      row_max = Math.max(row_cnt, row_max);
    }
    row_cnt = 1;
  }

  // 열(column) 계산
  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N-1; i++) {
      // 동일한 색상이라면
      if (board[i][j] === board[i+1][j]) {
        col_cnt++;
      } else {
        col_cnt = 1;
      }
      col_max = Math.max(col_cnt, col_max);
    }
    col_cnt = 1;
  }
  return answer = Math.max(row_max, col_max);
}

console.log(maxCount);
