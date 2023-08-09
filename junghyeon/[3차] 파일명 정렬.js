// 사전순 정렬 대소문자 구분 x
// 오름차순 숫자정렬
// 인덱스가 정렬전과  같은 요소부터 다음 조건 적용하여 정렬
function solution(files) {
    const temp  = []
    
    for(let file of files) {
        temp.push(file.split(/(\d+)/)) 
    }
    console.log(temp)
    temp.sort(function(a, b) {
        var nameA = a[0].toUpperCase(); 
        var nameB = b[0].toUpperCase(); 
        
        if(nameA == nameB) {
            if (Number(a[1]) > Number(b[1])) {
                return 1;
            }
            if (Number(a[1]) < Number(b[1])) {
                return -1;
            }   
        }
        
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        
    })

    return temp.map(str => str.join(""))
}
