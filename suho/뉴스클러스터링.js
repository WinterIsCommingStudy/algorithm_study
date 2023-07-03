function solution(str1, str2) {
  var answer = 0;
  const strFirst = str1.toUpperCase();
  const strSec = str2.toUpperCase();

  const strArr = (str) => {
    const spaceCheck = /\s/g;
    const characters = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
    const strArr = str.split("");
    let result = [];
    for (let i = 0; i < strArr.length - 1; i++) {
      let strResult = str[i] + str[i + 1];
      if (!strResult.match(characters) && !strResult.match(spaceCheck)) {
        result.push(strResult);
      }
    }
    return result;
  };
  let strFirstArr = strArr(strFirst);
  console.log(strFirstArr);
  let strSecArr = strArr(strSec);
  console.log(strSecArr);
  const set = (str1, str2) => {
    let min;
    let max;
    if (str1.length !== str2.length) {
      min = str1.length > str2.length ? str2 : str1;
      max = str1.length < str2.length ? str2 : str1;
    } else {
      min = str1;
      max = str2;
    }
    let intersection = 0;
    for (let i = 0; i < max.length; i++) {
      for (let j = 0; j < min.length; j++) {
        if (max[i] === min[j] && max[i] !== 0 && min[j] !== 0) {
          console.log(max, min);
          max[i] = 0;
          min[j] = 0;
          intersection++;
        }
      }
    }
    console.log(max, min);
    console.log(
      intersection,
      max.length + min.length - intersection,
      intersection / (max.length + min.length - intersection)
    );
    let divideResult = intersection / (max.length + min.length - intersection);
    if (divideResult == NaN) {
      divideResult = 1;
    }
    console.log("a", divideResult);
    const result = Math.floor(divideResult * 65536);
    console.log(result);
    return result;
  };
  answer = set(strFirstArr, strSecArr);

  return answer;
}

solution("aa1+aa2", "AAAA12");
// solution("handshake", "shake hands");
