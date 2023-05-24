function solution(participant, completion) {
    let answer = [...participant, ...completion];
    const result = answer.reduce((accu, curr) => { 
  accu[curr] = (accu[curr] || 0)+1;
        console.log(accu[curr])
  return accu;
}, {});
    
    answer = Object.entries(result).filter(([k,v])=>v%2===1).map(([k])=>k).toString();
    
    return answer;
}
