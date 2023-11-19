function solution(n, t, m, p) {
    let num = '';
    let ans = '';

    for (let i = 0; num.length < m * t; i++) {
        num += i.toString(n).toUpperCase();
    }
    num.split('').map((item, idx) => {
        if (idx % m  === (p-1)) {
            if (ans.length < t) {
                ans += item;
            }
        }
    });
    return ans;
}
