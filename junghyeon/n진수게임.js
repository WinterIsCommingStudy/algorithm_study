function solution(n, t, m, p) {
    let result = '';
    let count = 0;
    for(let i = 0; i < t*m; i++) {
        const itoStringN = i.toString(n).toUpperCase();

        for(const num of itoStringN){   
            if(count % m === p - 1){   // 내 순서일 때
                result += num; 
                if(result.length === t) return result
            } 
            count++;
        }
    }
}
