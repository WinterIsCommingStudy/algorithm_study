// [3차] 파일명 정렬
// unsolved
// https://tesseractjh.tistory.com/216
function solution(files) {
  return files.sort((a, b) => {
    const [, aHead, aNum] = a.match(/(\D+)(\d{1,5})(.*)/);
    const [, bHead, bNum] = b.match(/(\D+)(\d{1,5})(.*)/);
    const aLowerHead = aHead.toLowerCase();
    const bLowerHead = bHead.toLowerCase();

    if (aLowerHead === bLowerHead) {
      return Number(aNum) - Number(bNum);
    } else {
      if (aLowerHead > bLowerHead) {
        return 1;
      } else if (aLowerHead < bLowerHead) {
        return -1;
      } else {
        return 0;
      }
    }
  });
}

console.log(
  solution([
    "img12.png",
    "img10.png",
    "img02.png",
    "img1.png",
    "IMG01.GIF",
    "img2.JPG",
  ])
);
console.log(
  solution([
    "F-5 Freedom Fighter",
    "B-50 Superfortress",
    "A-10 Thunderbolt II",
    "F-14 Tomcat",
  ])
);

// (1)
// function solution(files) {
//   files.sort((a, b) => {
//     const headA = a.match(/^\D+/)[0].toLowerCase();
//     const headB = b.match(/^\D+/)[0].toLowerCase();

//     const numberA = parseInt(a.match(/\d+/)[0], 10);
//     const numberB = parseInt(b.match(/\d+/)[0], 10);

//     // 중복된 파일명은 없어서 동일한 경우는 고려하지 않아도 된다.
//     if (headA < headB) return -1;
//     if (headA > headB) return 1;

//     return numberA - numberB;
//   });

//   return files;
// }
