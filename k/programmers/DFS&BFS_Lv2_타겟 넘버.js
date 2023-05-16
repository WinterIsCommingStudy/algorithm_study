function solution(numbers, target) {
    let answer = 0;
    const len = numbers.length;
    
    function dfs(idx, sum) {
        // 1. 탈출 조건
        if (idx === len) {        // 현재 인덱스가 배열 마지막 값에 왔을 때
            if (target === sum) {
                answer++;
            }
            return;
        }
        // 2. 수행 동작
        dfs(idx + 1, sum + numbers[idx]);  // 더할 경우
        dfs(idx + 1, sum - numbers[idx]);  // 뺄 경우
    }
    dfs(0, 0);
    return answer;
}
