/*
// 양쪽 괄호 각각 세기
// 양쪽 맨 끝은ㅇ ( )로 되어있어야함
열린 괄호 일 때 + 
닫힌 괄호 일 때 -
마지막에 0이 아니거나 중간에 음수가 된다면 올바른 괄호가 아님

풀이 1 구현
*/
function solution(s){
    let checkBracket = 0;
    for(let i =0; i< s.length; i ++) {
        if(checkBracket > s.length - i) return false
        if(s[i] === "(") {
            checkBracket++
        } else {
            checkBracket--
        }
        if(checkBracket < 0) return false
    }
    return checkBracket===0 ? true : false
}

// 풀이 2 스택
function solution(s){
    const stack = [];
    for(let i of s) {
        if(i === '(') 
            stack.push(i)
        else {
            if(!stack.pop()) 
                return false  // 제거할게 없으면 '(' 이 없는 상태로 ')' 가 들어온 것이므로 false
        }
    }
    return stack.length === 0 ? true:false   // stack에 괄호가 남아있다면 ( 이 닫히지 않은 상태로 들어있는 것이므로 false
}


