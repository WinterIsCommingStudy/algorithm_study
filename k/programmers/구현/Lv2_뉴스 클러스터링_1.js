function solution(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    const A = [];
    const B = [];
    let inter = 0;
    
    // 영문자만 남기기
    for (let i=0; i < str1.length-1; i++) {
        let tmp = str1.substring(i, i+2);
        if (tmp.replace(/[a-z]/g, "").length === 0) {
            A.push(tmp);
        }
    }
    for (let i=0; i < str2.length-1; i++) {
        let tmp = str2.substring(i, i+2);
        if (tmp.replace(/[a-z]/g, "").length === 0) {
            B.push(tmp);
        }
    }
    // 유사도 0
    if (A.length === 0 && B.length === 0) {
        return 65536;
    }
    // 교집합
    for (let i=0; i < A.length; i++) {
        let tmp = A[i];
        
        for (let j=0; j < B.length; j++) {
            if (tmp === B[j]) {
                inter++;
                B[j] = "";  // 중복 검사 방지
                break;
            }
        }
    }
    // 합집합
    const union = A.concat(B).length - inter;
    
    return Math.floor((inter / union) * 65536);
}
