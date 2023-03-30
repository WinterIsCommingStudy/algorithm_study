// input값 처리
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
[N, ...arr] = input;

console.log(mergeSort(arr).join('\n'));

// 병합 정렬
function merge(left, right) {
  const result = [];
  let [i, j] = [0, 0];

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {     // left와 right 요소끼리 비교
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  return result;
}

// 정렬되지 않은 배열 arr를 요소 1개만 가진 배열이 될 때까지 쪼개기
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.ceil(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid, arr.length));

  return merge(left, right);
}
