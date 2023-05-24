
function solution(clothes) {
    let total = 1;
    let map = {}
    for(let i =0; i< clothes.length; i++) {
        const key = clothes[i][1]
        map[key] = (map[key]||0) + 1
    }
    for (const key in map) {
        total *= map[key]+1;
    }
    
    return total-1;
}
