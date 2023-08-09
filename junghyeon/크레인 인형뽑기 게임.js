function solution(board, moves) {
    let bascket = [];
    let result = 0;
    for(let i =0; i < moves.length; i++) {
        for(let j =0; j < board.length; j++) {
            if(board[j][moves[i]-1] !== 0) {   
                const cur = board[j][moves[i]-1]
                
                bascket.push(cur)
                board[j][moves[i]-1] = 0;      // bascket에 담으면 0으로 바꿔놓기
                break;
            }            
        }
    }
    // bascket을 탐색하면서 인접한 인덱스에 같은 값이 있으면 삭제 후 처음부터 다시 탐색
    for (let i = 0; i < bascket.length - 1; i++) {
        if (bascket[i] === bascket[i + 1]) {
            bascket.splice(i, 2) 
            result +=2;
            if(i > 1) {
                i -= 2;   
            } else {
                i = -1; // -1을 넣어줘야 다음 루프에서 0부터 시작함
            }
        }
    }
    return result
}
