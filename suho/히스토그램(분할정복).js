const getResult = (heightList, left, right) => {
  //기저 사례: 직사각형이 하나밖에 없는 경우
  if (left === right) {
    console.log("left===right", left, right);
    return heightList[left];
  }
  console.log("left", left, "right", right);
  console.log("aaaa");
  //[left, mid], [mid+1, right]의 두 구간으로 문제를 분할
  const mid = Math.floor((left + right) / 2);
  //양쪽 부분 문제를 재귀호출 후 더 큰 직사각형의 넓이를 저장
  let adf = getResult(heightList, left, mid);
  console.log("left+mid", adf, left);
  console.log(mid, right, left);
  let afa = getResult(heightList, mid + 1, right);
  console.log("mid+1+right", afa);
  console.log("result", left, right, adf, afa);

  let result = Math.max(adf, afa);

  console.log(result);

  //두 부분에 모두 걸쳐있는 사각형 중 가장 큰 것 탐색
  let low = mid,
    high = mid + 1;
  console.log("bbbb");
  let height = Math.min(heightList[low], heightList[high]);
  //[mid, mid+1]만 포함하는 너비 2인 사각형을 고려
  result = Math.max(result, height * 2);

  //사각형이 입력 전체를 덮을 때까지 확장
  while (low > left || high < right) {
    //항상 높이가 더 높은 쪽으로 확장
    if (
      high < right &&
      (low === left || heightList[low - 1] < heightList[high + 1])
    ) {
      high++;
      height = Math.min(height, heightList[high]);
    } else {
      low--;
      height = Math.min(height, heightList[low]);
    }
    //확장 후 사각형의 넓이
    result = Math.max(result, height * (high - low + 1));
  }
  console.log("finish", result);
  return result;
};

console.log(getResult([2, 2, 1, 4, 1], 0, 4));
