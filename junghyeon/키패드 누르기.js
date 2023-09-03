const keypad = [
        [1, 2, 3], 
        [4, 5, 6], 
        [7, 8, 9], 
        ["*", 0,"#"]
        ];

// 1 4 7 L
// 3 6 9 R
// 2 5 8 0 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용. 같다면, 오른손잡이는 오른손 , 왼손잡이는 왼손 

/* 알아야하는것 
현재 손가락 위치
현재 손가락 위치에서 2 5 8 0 이 다음에 있다면 거리계산
    거리계산법
    keypad 배열의 각 인덱스의 차이 
    예시 1 에서 5 이면 [0, 0] 에서 [1, 1]이므로 각 인덱스의 차이합의 절댓값 2
*/ 

function findIndex(value, array) {
    for (let i = 0; i < array.length; i++) {
        const innerIndex = array[i].indexOf(value);
        
        if (innerIndex !== -1) {
            return [i, innerIndex];
        }
    }
}

function solution(numbers, hand) {
    let Lcur = "*";
    let Rcur = "#";
    let result = '';
    for(let i =0 ;i < numbers.length; i++) {
        if(numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
            result += "L";
            Lcur = numbers[i] // 손가락 위치 파악
        } else if(numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
            result += "R";
            Rcur = numbers[i]
        } else {
            // 2 5 8 0 
            const curIndex = findIndex(numbers[i], keypad)
            const LIndex = findIndex(Lcur, keypad)
            const RIndex = findIndex(Rcur, keypad)
            
            const Lsum = Math.abs(LIndex[0] - curIndex[0]) + Math.abs(LIndex[1] - curIndex[1])
            const Rsum = Math.abs(RIndex[0] - curIndex[0]) + Math.abs(RIndex[1] - curIndex[1])
            
            if(Lsum > Rsum) {
                result += "R"
                Rcur = numbers[i]
            } else if (Lsum < Rsum) {
                result += "L"
                Lcur = numbers[i]
            } else {
                if(hand === "left") {
                    result += "L"
                    Lcur = numbers[i]
                } else {
                    result += "R"
                    Rcur = numbers[i]
                }
            }
            
        }
    }
    return result 
}

