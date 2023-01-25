function solution(name) {
    let changeAlphabet = 0;
    let minMoves = name.length - 1;
    
    for (let i = 0; i < name.length; i++) {
        let changeNum = name.charCodeAt(i);
        
        if (changeNum < 78) {
            changeAlphabet += changeNum - 65;
        } else { 
            changeAlphabet += 91 - changeNum;
        }
        
        // 연속된 a 개수 확인
        let index = i + 1;
        while (index < name.length && name[index] == 'A') index++;
        
        // 이동 수가 적은 방법을 선택
        minMoves = Math.min(minMoves, (i*2) + name.length - index);
        minMoves = Math.min(minMoves, (name.length - index) * 2 + i); 
    }

    return changeAlphabet + minMoves;
}
