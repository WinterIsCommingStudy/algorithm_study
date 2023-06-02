function solution(clothes) {
    let ans = 1;
    
    // 각 종류의 개수 카운트
    let table = clothes.reduce(
        (table, key) => {
            table[key[1]] = table[key[1]] ? table[key[1]] + 1 : 1;
            return table;
        }, {}
    );
    
    // 착용 가능한 경우의 수 카운트
    for (let key in table) {
        ans *= (table[key] +1);  // 특정 종류를 입지 않을 경우 +1
    }
    // 아무것도 입지 않은 경우 제외
    return ans -1;
}
