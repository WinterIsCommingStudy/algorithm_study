function solution(numbers, target) {
  var answer = 0;
  const length = numbers.length;

  const dfs = (count, sum) => {
    // console.log(count, sum);
    if (count === length) {
      if (target === sum) {
        answer++;
      }
      return;
    }
    dfs(count + 1, sum + numbers[count]);
    dfs(count + 1, sum - numbers[count]);
  };

  dfs(0, 0);
  console.log(answer);
  return answer;
}

solution([1, 2, 3], 6);
