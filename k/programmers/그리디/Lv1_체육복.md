## 1. 프로그래머스 문제   
* 체육복 (Lv1, 그리디)   
: https://school.programmers.co.kr/learn/courses/30/lessons/42862

* 스터디 : 23.01.21
<br>

### 1) 유의사항
* 배열은 정렬되어 있는가?

* 여분의 체육복을 가진 사람들(reserve)은 정말 여분을 가지고 있는가?
<br>

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
__Ex>__: 이름차오름차순 정렬
```
const student = [
    { name : "재석", age : 21},
    { name : "광희", age : 25},
    { name : "형돈", age : 13},
    { name : "명수", age : 44}
];

student.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
```
__Ex>__: 나이 오름차순 정렬
```
const student = [
    { name : "재석", age : 21},
    { name : "광희", age : 25},
    { name : "형돈", age : 13},
    { name : "명수", age : 44}
];

student.sort((a, b) => a[age] - b[age]);
```

☆ reference: https://dudmy.net/javascript/2015/11/16/javascript-sort/   

<br>
<hr>

### 2) include()
* __```includes(찾을 값, 검색을 시작할 인덱스)```__   


   * 인덱스 값이 없을 경우, 전체를 찾는다

__Ex>__
```
const array1 = [1, 2, 3];
console.log(array1.includes(2, 2));  // false
```
<br>

__Ex>__: 시작 인덱스가 배열 범위를 벗어난 숫자일 때
* 시작 인덱스가 음수인 경우 0으로 취급되며, 배열의 전체에서 검색된다

* 시작 인덱스가 배열의 길이보다 같거나 큰 경우는 false를 리턴다. 이 때는 배열을 검색하지 않는

```
console.log(array1.includes(2, -100));  // true
console.log(array1.includes(2, 100));   // false
```

<br>
<hr>

### 3) filter()
* 배열에서 특정 값 지우기

__Ex>__
```
let arr = ['a', 'b', 'b', 'c'];

// 원소 'b' 삭제
let arrFiltered = arr.filter((element) => element !== 'b');   // ['a', 'c']
```

☆ reference : https://hianna.tistory.com/489
