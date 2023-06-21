// 최근에 사용되지 않은 것 중 가장 먼저 들어온 것(=오래된것)을 먼저 삭제한다
// 캐시 사이즈 만큼의 배열을 만들고 cities 에서 들어오는 값을 차례대로 밀어넣는다

// !!!!!!! 테스트케이스 기존에 캐시안에 들어있던 데이터가 또 나왔을 경우 캐시에 넣기만 하고 기존 캐시 데이터를 지우지 않아서 틀리는 것입니다.
// 캐시히트된 기존 캐시를 지우는 코드를 넣으면 해결될 거에요.

function solution(cacheSize, cities) {
    const cache = [];
    let time = 0;
    
    cities = cities.map(el => el.toLowerCase());
    
    for(const city of cities) {
        if (cache.includes(city)) {
          cache.splice(cache.indexOf(city), 1); 
          time += 1; 
        } else {
          if (cache.length >= cacheSize) {
            cache.shift(); 
          }
          time += 5; 
        }
        if (cacheSize > 0) {            // cacheSize 가 0일 떄 예외처리
          cache.push(city); 
        }
    }

  return time;
}

