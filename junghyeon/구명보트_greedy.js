//   3 3 3    5   return 3
// 2 5 7 4.  10.   [2,4]  [5]  [7]  => 3      [2,7.] [4,5]    
// 반복문 돌면서 limit에서 people 차례대로 뺴주기 people 배열이 0이되면 return 
// 반복문 한바퀴돌떄마다 count++    
// peopleArr 큰것부터 뺼수있도록 정렬해주기

function solution(people, limit) {
    let count = 0;
    people = people.sort((a,b) => b-a)
    let peopleArr = [...people]
    for(let i = 0; i < people.length; i++) 
    {
        let max = limit - peopleArr[0]
        peopleArr.splice(0, 1)
        count++;
        for(let j = 0; j < peopleArr.length; j++) {
            console.log(peopleArr[j])
            if(max >= peopleArr[j]) {           
                max -= peopleArr[j]
                peopleArr.splice(j, 1)
                break;  // 2명제한 예외처리
            } 
        }
        if(peopleArr.length == 0) break;
    }
    return count
}


// 효율성 통과 코드
function solution(people, limit) {
    let count = 0;
    people = people.sort((a,b) => b-a)
    let len = people.length;
    for(let i = 0; i < len; i++) 
    {
        count+=1
        let max = limit - people[i]
        if(max >= people[len-1]) {
            len--
        }
    }
    return count
}
