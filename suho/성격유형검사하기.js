function solution(survey, choices) {
  var answer = [];
  let personality = ["R", "T", "C", "F", "J", "M", "A", "N"];
  let personalityMap = new Map();
  personality.map((p) => {
    personalityMap.set(p, 0);
  });
  console.log(personalityMap);
  let point = [0, 3, 2, 1, 0, 1, 2, 3];

  const surveySplit = (sur) => {
    return sur.split("");
  };

  for (let i = 0; i < survey.length; i++) {
    let surveySplitArr = surveySplit(survey[i]);

    if (choices[i] === 0) {
      return;
    }
    if (choices[i] <= 3) {
      personalityMap.set(
        surveySplitArr[0],
        personalityMap.get(surveySplitArr[0]) + point[choices[i]]
      );
    } else {
      personalityMap.set(
        surveySplitArr[1],
        personalityMap.get(surveySplitArr[1]) + point[choices[i]]
      );
    }
  }
  let personalityMapArr = [...personalityMap];
  console.log(personalityMapArr);

  const typeInspectSort = (arrFir, arrSec) => {
    let typeInspectArr = [arrFir, arrSec];
    let typeInspectArrSort = typeInspectArr.sort((a, b) => {
      if (a[0] < b[0]) {
        return -1;
      } else {
        return 1;
      }
    });
    return typeInspectArrSort[0][0];
  };

  for (let i = 0; i <= personalityMapArr.length - 2; i += 2) {
    if (personalityMapArr[i][1] === personalityMapArr[i + 1][1]) {
      let typeInspectArrSort = typeInspectSort(
        personalityMapArr[i],
        personalityMapArr[i + 1]
      );
      answer.push(typeInspectArrSort);
    } else {
      let typeInspect =
        personalityMapArr[i][1] > personalityMapArr[i + 1][1]
          ? personalityMapArr[i][0]
          : personalityMapArr[i + 1][0];
      answer.push(typeInspect);
    }
  }

  return answer.join("");
}

console.log(solution(["TR", "RT", "TR"], [7, 1, 3]));

// function solution(survey, choices) {
//   var answer = [];
//   let personality = ["R", "T", "C", "F", "J", "M", "A", "N"];
//   let personalityMap = new Map();
//   personality.map((p) => {
//     personalityMap.set(p, 0);
//   });
//   console.log(personalityMap);
//   let point = [0, 3, 2, 1, 0, 1, 2, 3];

//   for (let i = 0; i < survey.length; i++) {
//     let surveySplitArr = survey[i].split("");

//     if (choices[i] === 0) {
//       return;
//     }
//     if (choices[i] <= 3) {
//       personalityMap.set(
//         surveySplitArr[0],
//         personalityMap.get(surveySplitArr[0]) + point[choices[i]]
//       );
//     } else {
//       personalityMap.set(
//         surveySplitArr[1],
//         personalityMap.get(surveySplitArr[1]) + point[choices[i]]
//       );
//     }
//   }

//   let personalityMapArr = [...personalityMap];

//   for (let i = 0; i <= personalityMapArr.length - 2; i += 2) {
//     if (personalityMapArr[i][1] === personalityMapArr[i + 1][1]) {
//       let typeInspectArr = [personalityMapArr[i], personalityMapArr[i + 1]];
//       let typeInspectArrSort = typeInspectArr.sort((a, b) => {
//         if (a[0] < b[0]) {
//           return -1;
//         } else {
//           return 1;
//         }
//       });

//       answer.push(typeInspectArrSort[0][0]);
//     } else {
//       let typeInspect =
//         personalityMapArr[i][1] > personalityMapArr[i + 1][1]
//           ? personalityMapArr[i][0]
//           : personalityMapArr[i + 1][0];
//       answer.push(typeInspect);
//     }
//   }

//   return answer.join("");
// }

// console.log(solution(["TR", "RT", "TR"], [7, 1, 3]));
