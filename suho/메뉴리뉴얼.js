function solution(arr, course) {
  let answer = [];
  const menuHash = new Map();

  for (let i = 0; i < arr.length; i++) {
    const menuArr = arr[i].split("");
    for (let j = 0; j < course.length; j++) {
      let checkArr = Array.from({ length: menuArr.length }, () => 0);
      let tmp = Array.from({ length: course[j] }, () => 0);

      function DFS(L, start) {
        if (L === course[j]) {
          let menu = [...tmp].sort().join("");
          if (menuHash.has(menu)) {
            menuHash.set(menu, menuHash.get(menu) + 1);
          } else {
            menuHash.set(menu, 1);
          }
        } else {
          for (let i = start; i < menuArr.length; i++) {
            if (checkArr[i] === 0) {
              checkArr[i] = 1;
              tmp[L] = menuArr[i];
              DFS(L + 1, i + 1);
              checkArr[i] = 0;
            }
          }
        }
      }
      DFS(0, 0);
    }
  }

  let maxValue = Array.from({ length: course.length }, () => 0);
  let menuHashArr = [...menuHash];
  let menuHashArrFilter = [];

  menuHashArr.map((a) => {
    if (a[1] > 1) {
      for (let i = 0; i < course.length; i++) {
        if (a[0].length === course[i]) {
          let value = a[1];
          maxValue[i] = Math.max(maxValue[i], value);
        }
      }
      menuHashArrFilter.push(a);
    }
  });

  menuHashArrFilter.map((a) => {
    for (let i = 0; i < course.length; i++) {
      if (course[i] === a[0].length && maxValue[i] === a[1]) {
        answer.push(a[0]);
      }
    }
  });

  return answer.sort();
}

console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]));
