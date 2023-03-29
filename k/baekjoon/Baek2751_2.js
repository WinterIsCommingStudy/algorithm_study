// input값 처리
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
[N, ...arr] = input;

// 퀵 소트
function quickSort(arr, left, right) {
  if (left >= right) {
    return;
  }
  // 기준점
  const mid = Math.floor((left + right) / 2);
  const pivot = arr[mid];
  const partition = divide(arr, left, right, pivot);

  quickSort(arr, left, partition - 1);
  quickSort(arr, partition, right);

  return arr;
}

function divide(arr, left, right, pivot) {
  while (left <= right) {
    while (arr[left] < pivot) {  // pivot과 비교
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }

    if (left <= right) {   // 왼쪽 값과 오른쪽 값을 바꾸기
      let tmp = arr[left];
      arr[left] = arr[right];
      arr[right] = tmp;
      left++;
      right--;
    }
  }
  return left;
}

console.log(quickSort(arr, 0, arr.length -1).join('\n'));
