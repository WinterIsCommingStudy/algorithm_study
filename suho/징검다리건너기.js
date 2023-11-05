// function solution(stones, k) {
//   var answer = 0;
//   let endPt = true;

//   function check(i) {
//     for (let j = 1; j < k; j++) {
//       if (stones[i + j] !== 0) {
//         return true;
//       }
//     }
//     return false;
//   }

//   while (endPt) {
//     for (let i = 0; i < stones.length; i++) {
//       if (stones[i] === 0) {
//         if (check(i)) {
//           endPt = true;
//         } else {
//           endPt = false;
//           break;
//         }
//       } else {
//         stones[i] -= 1;
//       }
//     }
//     answer++;
//   }
//   return answer - 1;
// }

// console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));

function solution(stones, k) {
  let max = 200000000;
  let min = 1;

  const check = (stoneList, k, min, max) => {
    if (min === max) {
      return min;
    }
    let mid = Math.round((min + max) / 2);
    let count = 0;
    for (let i = 0; i < stoneList.length; i++) {
      if (count === k) {
        break;
      }
      let value = stoneList[i] - (mid - 1);
      value <= 0 ? count++ : (count = 0);
    }
    if (count === k) {
      return check(stoneList, k, min, mid - 1);
    } else {
      return check(stoneList, k, mid, max);
    }
  };

  const result = check(stones, k, min, max);
  return result;
}

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));
