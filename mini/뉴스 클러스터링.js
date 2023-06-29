// [1차] 뉴스 클러스터링
// 교집합을 먼저 구하고, 두 배열을 합쳐서 -교집합 해서 합집합을 구했다.
function solution(str1, str2) {
  function cutting(str) {
    str = str.toLowerCase().split("");
    const alphabet = /[a-z]/;
    const arr = [];
    for (let i = 0; i < str.length - 1; i++) {
      if (alphabet.test(str[i]) && alphabet.test(str[i + 1])) {
        arr.push(str[i] + str[i + 1]);
      }
    }
    return arr;
  }
  const arr1 = cutting(str1);
  const arr2 = cutting(str2);

  function intersect(arr1, arr2) {
    const a = [...arr1];
    const b = [...arr2];
    const result = [];
    a.forEach((e) => {
      const idx = b.indexOf(e);
      if (idx > -1) {
        result.push(e);
        b.splice(idx, 1);
      }
    });
    return result;
  }
  const intersectV = intersect(arr1, arr2);

  function union(a, b) {
    const result = [...a, ...b];
    intersectV.forEach((e) => {
      const idx = result.indexOf(e);
      if (idx > -1) {
        result.splice(idx, 1);
      }
    });
    return result;
  }
  const unionV = union(arr1, arr2);

  return !intersectV.length && !unionV.length
    ? 65536
    : parseInt((intersectV.length / unionV.length) * 65536);
}

console.log(solution("FRANCE", "french"));
// console.log(solution("handshake", "shake hands"));
// console.log(solution("aa1+aa2", "AAAA12"));
// console.log(solution("E=M*C^2", "e=m*c^2"));

// (1)
// WOW.....
// function solution(str1, str2) {
//   function explode(text) {
//     const result = [];
//     for (let i = 0; i < text.length - 1; i++) {
//       const node = text.substr(i, 2);
//       if (node.match(/[A-Za-z]{2}/)) {
//         result.push(node.toLowerCase());
//       }
//     }
//     return result;
//   }

//   const arr1 = explode(str1);
//   const arr2 = explode(str2);
//   const set = new Set([...arr1, ...arr2]);
//   console.log("set", set);
//   let union = 0;
//   let intersection = 0;

//   set.forEach((item) => {
//     console.log(item, arr1, arr2);
//     const has1 = arr1.filter((x) => x === item).length;
//     const has2 = arr2.filter((x) => x === item).length;
//     union += Math.max(has1, has2);
//     intersection += Math.min(has1, has2);
//   });
//   return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
// }
