function solution(genres, plays) {
    const table = genres.reduce((table, genre, i) => {
        if (!table[genre]) {
            table[genre] = { cnt: plays[i], list: [] };
        } else {
            table[genre].cnt += plays[i];
        }
        table[genre].list.push([i, plays[i]]);
        return table; 
    }, {});
}

/*
table = {
  classic: { cnt: 1450, list: [ [0, 500], [2, 800], [3, 800] ] },
  pop: { cnt: 3100, list: [ [1, 600], [4, 2500] ] }
}
*/
