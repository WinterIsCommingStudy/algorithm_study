function solution(msg) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G',
                     'H', 'I', 'J', 'K', 'L', 'M', 'N',
                     'O', 'P', 'Q', 'R', 'S', 'T', 'U',
                     'V', 'W', 'X', 'Y', 'Z'];
    let tmp = '';
    const answer = [];
    
    for (let i=0; i < msg.length; i++) {
        tmp += msg[i];
        
        if (!alphabet.includes(tmp)) {
            answer.push(alphabet.indexOf(tmp.slice(0, -1)) +1);  // 색인 번호
            alphabet.push(tmp);
            tmp = msg[i];  // 현재 시점
        }
    }
    if (tmp) {
        answer.push(alphabet.indexOf(tmp) +1)
    }
    return answer;
}
