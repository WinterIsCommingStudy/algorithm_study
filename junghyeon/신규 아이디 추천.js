function solution(new_id) {
    let answer = new_id.toLowerCase()
    .replace(/[^\w-._]+/g,'')  
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g,'')
    .replace(/^$/, 'a') 
    .substr(0,15)
    .replace(/\.$/g,'')
    answer = answer.length > 2 ? answer : answer + answer.substr(-1).repeat(3 - answer.length);
    return answer;
}

