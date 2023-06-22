function solution(s) {
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = s;
    
    for (let i=0; i < 10; i++) {
        let tmp = answer.split(numbers[i]);
        answer = tmp.join(i);   // tmp의 요소가 하나뿐이라면 구분자 i는 합쳐지지 않는다
    }
    return parseInt(answer);
}
