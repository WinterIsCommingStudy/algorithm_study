// 자카드 유사도 = 교집합 / 합집합
// FRANCE => {FR, RA, AN, NC, CE}
// 대소문자 구분 x
// ab+ => {ab}  즉, 영문자만 허용
// 필터링 -> 대소문자통일 -> 다중집합 -> 계산
function solution(str1, str2) {
    str1 = str1.replace(/[^a-zA-Z\s]/g, '').replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/[^a-zA-Z\s]/g, '').replace(/\s/g, '').toLowerCase();

    const splitStr = (str) => {
        const arr = []
        for(let i =0; i< str.length-1; i++) {
            let temp = str.substr(i, 2)
            arr.push(temp)
        }
        return arr
    }
    let str1s = splitStr(str1)
    let str2s = splitStr(str2)
    console.log(str1s, str2s)
    const n = str1s.filter(el => str2s.includes(el))
    const u = [...new Set([...str1s, ...str2s])]
    console.log(n, u)
    return Math.floor((n.length / u.length) * 65536)
}
