//카펫
// 처음에 틀린 이유 : [18, 6] 일때, [5, 4]라고 생각함. 그렇게 되면, 타일의 개수가 20개로 주어진 24개와 맞지않다. 정답은 [8, 3]이 나와야한다.
// 최대한 정사각형 모양에 근접하게 생성해야 한다고 잘못 생각했다. "타일의 개수가 맞아야 한다는 조건을 무시했음."
function solution(brown, yellow) {
  let height = Math.floor(Math.sqrt(yellow));
  while (true) {
    if (
      yellow % height === 0 &&
      (yellow / height + 2) * (height + 2) === brown + yellow
    )
      break;
    height--;
  }
  const width = yellow / height;
  return [width + 2, height + 2];
}

console.log(solution(24, 24));
console.log(solution(18, 6));
