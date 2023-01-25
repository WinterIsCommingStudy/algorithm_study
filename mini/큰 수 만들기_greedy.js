function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    const num = number[i];

    while (k > 0 && stack[stack.length - 1] < num) {
      stack.pop();
      k--;
    }
    stack.push(num);
  }

  stack.splice(stack.length - k, k);
  return console.log(stack.join(""));
}

solution("1924", 2); //94
solution("4321", 1); //432
solution("4177252841", 4); //775841
