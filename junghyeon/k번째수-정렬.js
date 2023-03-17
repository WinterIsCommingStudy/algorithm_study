// i ~ j 자르고 오름차순 정렬 후 k번째 값 
function solution(array, commands) {
    const answer = [];
    for(const command of commands) {
        let sliceArray = array.slice(command[0]-1, command[1]).sort((a,b)=>a-b)
        answer.push(sliceArray[command[2]-1])
    }
    
    return answer;
}
