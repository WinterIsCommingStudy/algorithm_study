// n편중 h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되면 h의 최댓값이 h-index
// [10, 10, 10]
function solution(citations) {
    citations = citations.sort((a, b)=> b-a)
    console.log(citations)
    let i =0;
    
    while(i + 1 <= citations[i]) {
        i++;
    }
    return i;
}

