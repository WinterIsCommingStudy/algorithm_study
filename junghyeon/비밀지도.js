function solution(n, arr1, arr2) {
    let map =  Array(n).fill("");
    
    for(let i =0;i < n; i++) {
        let temp = (Number(arr1[i].toString(2)) + Number(arr2[i].toString(2))).toString().padStart(n,0)
        for(let j =0; j < n; j++) {
            if(temp[j] !== '0') map[i] += '#'
            else map[i] += ' '
        }
    }
    return map
}
