function solution(m, n, board) {
  var answer = 0;

  const blockArr = board.map((b) => {
    return b.split("");
  });

  let arrI = [];
  let arrJ = [];
  function blockCheck(block) {
    let blockArrI = [];
    let blockArrJ = [];
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n; j++) {
        if (
          block[i][j] === block[i][j + 1] &&
          block[i][j] === block[i + 1][j] &&
          block[i][j + 1] === block[i + 1][j + 1] &&
          block[i][j + 1] !== undefined &&
          block[i][j] !== 0 &&
          block[i][j + 1] !== 0
        ) {
          blockArrI.push(i);
          blockArrJ.push(j);
        }
        arrI = blockArrI;
        arrJ = blockArrJ;
      }
    }
    if (!arrI.length) {
      return;
    }
    arrChange(arrI, arrJ, block);
  }

  function arrChange(arri, arrj, block) {
    for (let i = 0; i < arri.length; i++) {
      block[arri[i]][arrj[i]] = 0;
      block[arri[i] + 1][arrj[i]] = 0;
      block[arri[i]][arrj[i] + 1] = 0;
      block[arri[i] + 1][arrj[i] + 1] = 0;
    }
    blockReposition(block);
  }

  function blockReposition(block) {
    for (let j = 0; j < n; j++) {
      for (let i = m - 1; i > 0; i--) {
        if (block[i][j] === 0) {
          for (let k = i; k >= 0; k--) {
            if (block[k][j] !== 0) {
              block[i][j] = block[k][j];
              block[k][j] = 0;
              break;
            }
          }
        }
      }
    }
    blockCheck(block);
  }

  blockCheck(blockArr);
  const result = blockArr.map((row) => row.join("")).join(""); // 배열의 각 행을 문자열로 만들고, \n으로 구분하여 결합
  const arr = result.replace(/0/g, "");
  answer = result.length - arr.length;
  return answer;
}

solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]);
// solution(4, 5, ["CCDCE", "CCAAB", "CCAAB", "CCFFF"]);
