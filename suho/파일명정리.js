function solution(files) {
  var answer = [];
  let result = [];
  files.map((a) => {
    const matchResult = a.match(/[a-zA-Z]+/);
    const firstString = matchResult ? matchResult[0] : "";
    const numberResult = a.match(/\d+/);
    const firstNumber = numberResult ? numberResult[0] : "";
    answer.push([a, firstString, firstNumber]);
  });

  const numSort = (arr) => {
    arr.sort((a, b) => {
      const numA = parseInt(a[2], 10);
      const numB = parseInt(b[2], 10);
      if (numA === numB) {
        const indexA = files.indexOf(a[0]);
        const indexB = files.indexOf(b[0]);
        return indexA - indexB;
      }
      return numA - numB;
    });
  };
  numSort(answer);
  console.log(answer);

  const charSort = (arr) => {
    arr.sort((a, b) => {
      let charA = a[1].toLowerCase()[0];
      let charB = b[1].toLowerCase()[0];
      if (charA === charB) {
        const numA = parseInt(a[2], 10);
        const numB = parseInt(b[2], 10);
        return numA - numB;
      }
      return charA > charB ? 1 : -1;
    });
  };

  charSort(answer);
  answer.map((i) => {
    result.push(i[0]);
  });
  return result;
}

solution([" . - a . b -0.03.21", "O49qcGPHuRLR5FEfoO00321"]);

// solution([
//   "img12.png",
//   "img10.png",
//   "img02.png",
//   "img1.png",
//   "IMG01.GIF",
//   "img2.JPG",
// ]);
