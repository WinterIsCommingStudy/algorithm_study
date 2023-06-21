function solution(n, arr1, arr2) {
    const answer = [];
    const sum = [];
    
    // 진수변환
    let one = arr1.map(num => num.toString(2));
    let two = arr2.map(num => num.toString(2));
    // 두 지도 겹치기
    for (let i=0; i < n; i++) {
        sum.push(
            String(Number(one[i])+Number(two[i])).padStart(n, 0)
        );
    }
    // 공백인지, 벽인지 판별
    for (let num of sum) {
        answer.push(
            num.replace(/0/g, " ").replace(/1|2/g, "#")
        );
    }
    return answer;
}
