function solution(N, stages) {
    const ans = [];
    let num = stages.length;
    
    // 유저 위치
    const users = new Array(N).fill(0);
    stages.map((item) => {
        if (item <= N) {
            users[item-1] += 1;
        }
    });
    // 실패율
    for (let i=1; i <= N; i++) {
        let user = users[i-1];
        ans.push([i, user / num]);
        num -= user;
    }
    ans.sort((a,b) => b[1] - a[1]);
    return ans.map((item) => item[0]);
}
