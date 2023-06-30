function solution(s) {
    const tuple = [];
    s = s.match(/\d+/g).map(Number);
    
    // 해시 테이블
    let table = s.reduce(
        (table, key) => {
            table[key] = table[key] ? table[key] +1 : 1;
            return table;
        }, {}
    );
    // 튜플
    for (let key in table) {
        tuple.push([key, table[key]]);
    }
    tuple.sort((a,b) => b[1] - a[1]);
    return tuple.map((item) => parseInt(item[0]));
}
