const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
let array = require("fs").readFileSync(filePath).toString().trim().split("\n");
let [N, K] = array.shift().split(" ");
array = array.map(Number);
// 오름차순 정렬이므로 배열을 끝에서부터 순회하며 k에서 빼준다
let count = 0;

for (let i = array.length - 1; K > 0; i--) {
  if (K >= array[i]) {
    K -= array[i];
    count++;
    i += 1; // 다음 루프에서 해당 array[i] 빼지는지 다시 계산
  }
}
console.log(count);
