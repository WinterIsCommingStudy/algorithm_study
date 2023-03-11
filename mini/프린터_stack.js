//프린터
function solution(priorities, location) {
  let count = 0;

  while (true) {
    const max = Math.max(...priorities);
    const number = priorities.shift();
    if (number === max) {
      count++;
      if (location === 0) {
        return count;
      }
    } else {
      priorities.push(number);
    }
    location--;

    if (location < 0) {
      location = priorities.length - 1;
    }
  }
}

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5

//(1)
// function solution(priorities, location) {
//   var arr = priorities.map((priority, index) => {
//     return {
//       index: index,
//       priority: priority,
//     };
//   });
//   console.log(arr);

//   var queue = [];

//   while (arr.length > 0) {
//     var firstEle = arr.shift();
//     var hasHighPriority = arr.some((ele) => ele.priority > firstEle.priority);
//     if (hasHighPriority) {
//       arr.push(firstEle);
//     } else {
//       queue.push(firstEle);
//     }
//   }

//   return queue.findIndex((queueEle) => queueEle.index === location) + 1;
// }
