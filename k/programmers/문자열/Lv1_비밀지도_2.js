function solution(n, arr1, arr2) {
    const answer = [];
    
    for (let i=0; i < n; i++) {
        answer.push(
            (arr1[i] | arr2[i]).toString(2)  // 두 지도 겹치기
            .padStart(n, 0)
            .replace(/0/g, " ").replace(/1/g, "#")  // 공백인지, 벽인지 판별
        )
    }
    return answer;
}
