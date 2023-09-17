function solution(maps) {
  var answer;
  let n = maps[0].length - 1;
  let m = maps.length - 1;

  let dx = [-1, 0, 1, 0];
  let dy = [0, -1, 0, 1];
  let queue = [];
  queue.push([0, 0, 1]);
  maps[0][0] = 0;
  while (queue.length) {
    let [x, y, p] = queue.shift();
    if (x === n && y === m) {
      return p;
    }
    for (let i = 0; i < dx.length; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && nx <= n && ny >= 0 && ny <= m && maps[nx][ny] === 1) {
        queue.push([nx, ny, p + 1]);
        maps[nx][ny] = 0;
      }
    }
  }
  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
