function solution(gems) {
    let answer = [1, gems.length];
    let left = 0, right = 0;
    let target = new Set(gems).size
    const map = new Map()
    map.set(gems[0], 1)
    
    //right이 범위를 초과할 때까지 반복
    while(right < gems.length) {
        if(target == map.size) {
            // 1. left++ (빈도수-1, 빈도수 0이 되면 Map에서 삭제)        
            // 2. right - left가 answer 보다 더 짧은 구간이라면 answer에 재할당
            if(right - left < answer[1] - answer[0]) {
                answer[0] = left +1;
                answer[1] = right+1;
            }
            map.set(gems[left], map.get(gems[left]) - 1)
            if(map.get(gems[left]) == 0) {
                map.delete(gems[left])
            }
            left++;
        } else {
            // 조건이 만족될 때까지 right++ (빈도수 +1)            
            right++;
            map.set(gems[right], map.get(gems[right]) ? map.get(gems[right]) +1 : 1)   
        }
    }
    
    return answer;
}
