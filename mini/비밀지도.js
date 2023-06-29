// [1차] 비밀지도
function solution(n, arr1, arr2) {
  const map1 = arr1.map((x) => x.toString(2).padStart(n, "0"));
  const map2 = arr2.map((x) => x.toString(2).padStart(n, "0"));
  const map3 = [];

  for (let i = 0; i < n; i++) {
    let decodeStr = "";
    for (let j = 0; j < n; j++) {
      if (map1[i][j] === "0" && map2[i][j] === "0") {
        decodeStr += " ";
      } else {
        decodeStr += "#";
      }
    }
    map3.push(decodeStr);
  }
  return map3;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
