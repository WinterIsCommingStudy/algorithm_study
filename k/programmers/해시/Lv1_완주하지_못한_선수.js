/*
function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    for (let i=0; participant.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}
*/

function solution(participant, completion) {
    let table = completion.reduce(
        (table, key) => {
            table[key] = table[key] ? table[key] + 1 : 1;  // 완주한 선수가 table 명단에 있다면 +1, 없다면 1 할당
            return table;
        }, {}
    );
    return participant.find((key) => {
        if (table[key]) {
            table[key] = table[key] - 1;  // 완주한 선수가 있다면, 그 수를 1명 빼주기
        } else {
            return true;  // 완주하지 못한 선수가 있다면, find() 메서드를 끝내고 그 요소를 반환
        }
    });
}
