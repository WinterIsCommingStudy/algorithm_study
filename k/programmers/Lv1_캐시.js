function solution(cacheSize, cities) {
    cities = cities.map(city => city.toLowerCase());
    
    const cache = [];
    const HIT = 1, MISS = 5;
    let time = 0;
    
    if (cacheSize === 0) {
        return cities.length * MISS;
    }
    
    while (cities.length) {
        let city = cities.shift();
        // Cache Hit
        if (cache.includes(city)) {
            cache.splice(cache.indexOf(city), 1);
            cache.push(city);
            time += HIT;
            
        // Cache Miss
        } else {
            if (cache.length >= cacheSize) {  // 캐시가 가득 찼다면
                cache.shift();
            }
            cache.push(city);
            time += MISS;
        }
    }
    return time;
}
