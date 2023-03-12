function isCorrectBracket(s){
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
// 균형잡힌 문자열 u와 나머지인 v로 분리하는데 u는 더이상 균형잡힌 문자열로 분리가 불가능해야함 
// u가 올바른 문자열이라면 재귀
function seperateP(p) {
    let v = [...p]
    let u = [];
    let countBracket = 0;
    for(let i of p) {
        if(i === "(") {
            countBracket ++;
            u.push(i)
            v.shift()
            
        }
        else {
            countBracket--;
            u.push(i)
            v.shift()
        }
        if(countBracket === 0) {
            u = u.join("")
            v = v.join("")
            return {u, v}
        }
    }
}

function solution(p) {
    if(p === '')  return ""
    else if (isCorrectBracket(p)) {
        return p
    }   
    let {u, v} = seperateP(p)
    console.log("u", u, "v",v)
    if(isCorrectBracket(u)){
        // 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다. 
        return u+solution(v)
    } else {
        v = "("+solution(v)+")";
        u = u.substr(1,u.length-2).replace(/[\(]|[\)]/g, (a) => a === ')' ? '(' : ')');
        
        return v+u
    }
}
