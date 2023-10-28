const isCross = (stones, mid, k) => {
    let count = 0;
    
    for(const stone of stones) {
        if(stone-mid <= 0) {
            count++;    
            if(count === k) return false
        } else {
            count =0;   
        }
    }
    return true
}


function solution(stones, k) {
    let min = 1
    let max = 200000000
    console.log(min, max)
    while (min <= max) {
        let mid = Math.floor((min + max) / 2)
        if(isCross(stones, mid, k)) {
            min = mid + 1
            console.log("min",min)
        } else {
            max = mid -1
            console.log("max",max)
        }
    }
    return min
}
