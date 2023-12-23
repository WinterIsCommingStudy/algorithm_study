function solution(data) {
  const item = ["연어", "참치", "닭가슴살", "베이컨", "버섯"];
  const [num, ...required] = data;
  let itemFilter;
  let checkArr = [];
  let answer = [];
  let requiredItem;

  if (data.length === 0) {
    return "기본 포케가 제공됩니다.";
  }

  if (required[0] === "") {
    itemFilter = item;
    requiredItem = [];
  } else {
    requiredItem = required[0].split(",");
    itemFilter = item.filter((i) => {
      return !requiredItem.includes(i);
    });
  }

  function DFS(v, S) {
    if (v === num - requiredItem.length) {
      if (requiredItem) {
        let result = requiredItem.concat(checkArr);
        answer.push(result);
      } else {
        answer.push(checkArr);
      }
      return;
    } else {
      for (let i = S; i < itemFilter.length; i++) {
        checkArr[v] = itemFilter[i];
        console.log(checkArr, v, i);
        DFS(v + 1, i + 1);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution([2, ""]));
