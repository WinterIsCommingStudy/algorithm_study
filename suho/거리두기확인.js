function solution(places) {
  var answer = [];
  for (let i = 0; i < places.length; i++) {
    const place = places[i].map((place) => {
      return place.split("");
    });
    const personPoints = personPoint(place);
    const checkDistance = checkPlacesDistance(personPoints);
    let result = 1;
    for (let j = 0; j < checkDistance.length; j++) {
      let checkingResult = findPerson(place, checkDistance[j]);
      if (checkingResult === 0) {
        result = checkingResult;
        break;
      }
    }
    answer.push(result);
  }

  function personPoint(place) {
    let personPoints = [];
    for (let i = 0; i < place.length; i++) {
      for (let j = 0; j < place[i].length; j++) {
        if (place[i][j] === "P") {
          const [x, y] = [i, j];
          personPoints.push([x, y]);
        }
      }
    }
    return personPoints;
  }

  function checkPlacesDistance(personPoints) {
    let tmp = Array.from({ length: 2 }, () => 0);
    let result = [];
    function DFS(L, S) {
      if (L === 2) {
        let [r1, c1] = tmp[0];
        let [r2, c2] = tmp[1];
        let sum = Math.abs(r1 - r2) + Math.abs(c1 - c2);
        if (sum <= 2) {
          result.push([tmp[0], tmp[1]]);
        }
      } else {
        for (let i = S; i < personPoints.length; i++) {
          tmp[L] = personPoints[i];
          DFS(L + 1, i + 1);
        }
      }
    }
    DFS(0, 0);
    return result;
  }

  function findPerson(place, checkDistances) {
    let dx = [-1, 0, 1, 0];
    let dy = [0, -1, 0, 1];
    let [sx, sy] = checkDistances[0];
    let [ex, ey] = checkDistances[1];
    let minX = Math.min(sx, ex);
    let maxX = Math.max(sx, ex);
    let minY = Math.min(sy, ey);
    let maxY = Math.max(sy, ey);
    let queue = [];

    queue.push([sx, sy]);
    place[sx][sy] = "X";
    while (queue.length) {
      let [sx, sy] = queue.shift();
      if (sx === ex && sy === ey) {
        return 0;
      }
      for (let i = 0; i < dx.length; i++) {
        let nx = sx + dx[i];
        let ny = sy + dy[i];
        if (
          nx >= minX &&
          ny >= minY &&
          nx <= maxX &&
          ny <= maxY &&
          (place[nx][ny] === "O" || place[nx][ny] === "P")
        ) {
          queue.push([nx, ny]);
          place[nx][ny] = "X";
        }
      }
    }
    return 1;
  }

  return answer;
}

console.log(
  solution([
    ["OPXOO", "PXXXX", "XXOOO", "OOOOO", "OOOPO"],
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
    ["PXXXX", "XPXXX", "XXPXX", "XXXOX", "XXXXP"],
    ["PXOPX", "OXOXO", "PXXXX", "OXOXO", "PXOPX"],
    ["POPOO", "XXXXX", "XXXXX", "XXXXX", "XXXXP"],
  ])
);
