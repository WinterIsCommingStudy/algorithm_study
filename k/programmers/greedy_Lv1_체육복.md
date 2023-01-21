## 1. 프로그래머스 문제   
* 체육복 (Lv1, 그리디)   
: https://school.programmers.co.kr/learn/courses/30/lessons/42862

* 스터디 : 23.01.21
<br>

### 1) 유의사항
* 배열은 정렬되어 있는가?

* 여분의 체육복을 가진 사람들(reserve)은 정말 여분을 가지고 있는가?

### 2) 문제 풀이
```
function solution(n, lost, reserve) {
    let newLost = lost.filter((x) => !reserve.includes(x)).sort((a,b) => a-b);
    let newReserve = reserve.filter((x) => !lost.includes(x)).sort((a,b) => a-b);
    
    let answer = n-newLost.length;

    newLost.map((lost) => {
        // 1. 여분이 없을 때
        if(newReserve.length === 0){
            return;
        }
        // 2. 잃어버린 것보다 작은 사이즈가 있을 때
        if(newReserve.includes(lost-1)) {
            newReserve = newReserve.filter((reserve) => reserve !== lost-1); // 여분 사용
            answer++;
        }
        // 3. 잃어버린 것보다 큰 사이즈가 있을 때
        else if(newReserve.includes(lost+1)) {
            newReserve = newReserve.filter((reserve) => reserve !== lost+1); // 여분 사용
            answer++;
        }
    })
    return answer;
}
```

<br>
<hr>

## 2. 메소드
### 1) sort()
* 배열 내장함수 => 정렬

* 오름차순, ASCII 문자 순서로 정렬된다
<br>

#### (1) 문자열 정렬   
__Ex>__   
```
let ani = ['cat', 'dog', 'bird'];

ani.sort();  // ['bird', 'cat', 'dog']
```
<br>

#### (2) 숫자 정렬
__Ex1>__
```
let num = [2, 11, 7, 23, 1];

num.sort(); // [1, 11, 2, 23, 7]
            // ASCII 문자 순서로 정렬되어 숫자 크기대로 정렬되지 않는다
```

__Ex2>__
```
let num = [2, 11, 7, 23, 1];

num.sort((a, b) => a-b);  // 오름차순 정렬
num.sort((a, b) => b-a);  // 내림차순 정렬
```

<br>

#### (3) Object 정렬
```
const student = [
    { name : "재석", age : 21},
    { name : "광희", age : 25},
    { name : "형돈", age : 13},
    { name : "명수", age : 44}
];

// 
student.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
```

<br>

### 2) include()
