//K번째수
function solution(array, commands) {
  const result = [];
  for (let x = 0; x < commands.length; x++) {
    const [i, j, k] = commands[x];
    const arr = array.slice(i - 1, j);
    arr.sort((a, b) => a - b);
    result.push(arr[k - 1]);
  }
  return result;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
