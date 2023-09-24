// function solution(sum, arr) {
//   let answer = 0;
//   let lt = 0;
//   let rt = 0;
//   let arrSum = 0;
//   while (rt < arr.length) {
//     if (sum === arrSum) {
//       console.log(lt, rt, arrSum);
//       answer++;
//       arrSum -= arr[lt];
//       lt++;
//     } else if (arrSum > sum) {
//       arrSum -= arr[lt++];
//     } else {
//       arrSum += arr[rt++];
//     }
//   }
//   return answer;
// }

// console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));

function solution(sum, arr) {
  let answer = 0;
  let lt = 0;
  let arrSum = 0;

  for (rt = 0; rt < arr.length; rt++) {
    arrSum += arr[rt];
    if (arrSum === sum) {
      answer++;
    }
    while (arrSum >= sum) {
      arrSum -= arr[lt++];
      if (arrSum === sum) {
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));
