function solution(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    const arr1 = [];
    const arr2 = [];
    let inter = 0;
    
    // 영문자만 남기기
    for (let i=0; i < str1.length-1; i++) {
        let tmp = str1.substring(i, i+2);
        if (tmp.replace(/[a-z]/g, "").length === 0) {
            arr1.push(tmp);
        }
    }
    for (let i=0; i < str2.length-1; i++) {
        let tmp = str2.substring(i, i+2);
        if (tmp.replace(/[a-z]/g, "").length === 0) {
            arr2.push(tmp);
        }
    }
    // 유사도 0
    if (arr1.length === 0 && arr2.length === 0) {
        return 65536;
    }
    // 교집합
    for (let i=0; i < arr1.length; i++) {
        let tmp = arr1[i];
        
        for (let j=0; j < arr2.length; j++) {
            if (tmp === arr2[j]) {
                inter++;
                arr2[j] = "";  // 중복 검사 방지
                break;
            }
        }
    }
    // 합집합
    const union = arr1.concat(arr2).length - inter;
    
    return Math.floor((inter / union) * 65536);
}
