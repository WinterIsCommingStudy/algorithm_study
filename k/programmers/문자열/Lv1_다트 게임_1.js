function solution(dartResult) {
    const answer = [];
    let tmp;
    
    for (let i=0; i < dartResult.length; i++) {
        let item = dartResult[i];
        
        if (!isNaN(Number(item))) {  // 정수라면
            tmp = dartResult[i-1] == 1 ? 10 : Number(item);
        } else {
            switch (item) {
                case 'S': answer.push(tmp);
                    break;
                case 'D': answer.push(Math.pow(tmp, 2));
                    break;
                case 'T': answer.push(Math.pow(tmp, 3));
                    break;
                case '*':
                    answer[answer.length-2] = answer[answer.length-2] * 2;
                    answer[answer.length-1] = answer[answer.length-1] * 2;
                    break;
                case '#':
                    answer[answer.length-1] = answer[answer.length-1] * (-1);
                    break;
            }
        }
    }
    return answer.reduce((acc, cur) => acc + cur, 0);
}
