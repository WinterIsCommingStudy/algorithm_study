function solution(s) {
    const tuple = [];
    s.slice(2, -2)
      .split("},{")
      .sort((a,b) => a.length - b.length)
      .map((item) => item.split(",").map(Number))
      .map((arr) => {
        arr.map((num) => {
            if(!tuple.includes(num)) {
                tuple.push(num)
            }
        })
      });
    return tuple;
}
