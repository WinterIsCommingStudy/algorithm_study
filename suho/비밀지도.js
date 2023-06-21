function solution(n, arr1, arr2) {
  var answer = [];

  const arrTostring = (arr) => {
    return arr.map((i) => {
      return i.toString(2);
    });
  };

  let arr1Binary = arrTostring(arr1);
  let arr2Binary = arrTostring(arr2);

  const visited = Array.from(Array(n), () => Array(n).fill(" "));

  const arrSum = (arr) => {
    for (let i = 0; i < n; i++) {
      let arrSplit = arr[i].split("");

      for (let j = 0; j < arrSplit.length; j++) {
        if (arrSplit.length < n) {
          let result = n - arrSplit.length;
          if (arrSplit[j] === "1") {
            visited[i][j + result] = "#";
          }
        } else {
          if (arrSplit[j] === "1") {
            visited[i][j] = "#";
          }
        }
      }
    }
  };

  arrSum(arr1Binary);
  arrSum(arr2Binary);

  visited.map((i) => {
    answer.push(i.join(""));
  });

  return answer;
}
solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
