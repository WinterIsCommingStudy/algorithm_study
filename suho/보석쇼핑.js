// function solution(gem) {
//   const gemSet = new Set(gem);
//   const gemHash = new Map();
//   let valueSum = Number.MAX_SAFE_INTEGER;
//   let keyArr = [];
//   let lt = 0;
//   gemHash.set(gem[lt], 1);

//   if (gemSet.size === 1) {
//     return [1, 1];
//   }

//   for (let rt = 1; rt < gem.length; rt++) {
//     if (gemHash.has(gem[rt])) {
//       gemHash.set(gem[rt], gemHash.get(gem[rt]) + 1);
//     } else {
//       gemHash.set(gem[rt], 1);
//     }
//     if (gemHash.size === gemSet.size) {
//       let sum = [...gemHash.values()].reduce((acc, value) => acc + value, 0);
//       if (valueSum > sum) {
//         valueSum = sum;
//         keyArr = [lt + 1, rt + 1];
//       }

//       while (gemHash.size === gemSet.size && rt > lt) {
//         if (gemHash.get(gem[lt]) === 1) {
//           gemHash.delete(gem[lt]);
//         } else {
//           gemHash.set(gem[lt], gemHash.get(gem[lt]) - 1);
//         }
//         lt++;
//         if (gemHash.size === gemSet.size) {
//           let sum = [...gemHash.values()].reduce(
//             (acc, value) => acc + value,
//             0
//           );
//           if (valueSum > sum) {
//             valueSum = sum;
//             keyArr = [lt + 1, rt + 1];
//           }
//         }
//       }
//     }
//   }

//   return keyArr;
// }

// console.log(
//   solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"])
// );

// console.log(solution(["AA", "AB", "AC", "AA", "AC"]));

// console.log(solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"]));

// console.log(solution(["XYZ", "XYZ", "XYZ"]));

function solution(gem) {
  const gemSet = new Set(gem);
  const gemHash = new Map();
  let minLength = Number.MAX_SAFE_INTEGER;
  let lt = 0,
    rt = 0;
  let keyArr = [0, gem.length - 1];

  while (rt < gem.length) {
    if (gemHash.has(gem[rt])) {
      gemHash.set(gem[rt], gemHash.get(gem[rt]) + 1);
    } else {
      gemHash.set(gem[rt], 1);
    }
    rt++;

    while (gemHash.size === gemSet.size) {
      if (rt - lt < minLength) {
        minLength = rt - lt;
        keyArr = [lt + 1, rt];
      }
      if (gemHash.get(gem[lt]) > 1) {
        gemHash.set(gem[lt], gemHash.get(gem[lt]) - 1);
      } else {
        gemHash.delete(gem[lt]);
      }
      lt++;
    }
  }

  return keyArr;
}

console.log(
  solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"])
);
console.log(solution(["AA", "AB", "AC", "AA", "AC"]));
console.log(solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"]));
console.log(solution(["XYZ", "XYZ", "XYZ"]));
