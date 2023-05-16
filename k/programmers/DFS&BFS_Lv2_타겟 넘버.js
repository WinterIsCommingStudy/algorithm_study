function solution(numbers, target) {
    let answer = 0;
    const len = numbers.length;
    
    function dfs(cnt, sum) {
        if (cnt === len) {
            if (target === sum) {
                answer++;
            }
            return;
        }
        dfs(cnt + 1, sum + numbers[cnt]);
        dfs(cnt + 1, sum - numbers[cnt])
    }
    dfs(0, 0);
    return answer;
}
