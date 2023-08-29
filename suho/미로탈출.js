function solution(maps) {
  let answer = 0;
  let map = [];
  maps.map((x) => {
    map.push(x.split(""));
  });
  let dx = [-1, 0, 1, 0];
  let dy = [0, -1, 0, 1];

  let sx;
  let sy;
  let ex;
  let ey;
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps.length; j++) {
      if (map[i][j] === "S") {
        sx = i;
        sy = j;
      }
      if (map[i][j] === "E") {
        ex = i;
        ey = j;
      }
    }
  }
  function DFS(x, y) {
    if (x === ex && y === ey) {
      return;
    } else {
      for (let i = 0; i < dx.length; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5 && map[nx][ny] !== "X") {
          answer++;
          map[nx][ny] = "X";
          DFS(nx, ny);
          map[nx][ny] = "O";
        }
      }
    }
  }
  map[sx][sy] = "X";
  DFS(sx, sy);

  if (answer === 0) {
    return (answer = -1);
  } else {
    return answer;
  }
}

console.log(solution(["LOOXS", "OOOOX", "OOOOO", "OOOOO", "EOOOO"]));

console.log(solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"]));
