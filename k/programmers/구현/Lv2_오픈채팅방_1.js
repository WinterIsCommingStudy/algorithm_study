function solution(record) {
    const userInfo = {};
    const ans = [];
    
    // 유저 정보
    record.map((item) => {
        const [command, uid, nickname] = item.split(' ');
        
        if (command === 'Enter') {
            userInfo[uid] = nickname;
            ans.push(`${uid}님이 들어왔습니다.`);
        } else if (command === 'Change') {
            userInfo[uid] = nickname;
        } else if (command === 'Leave') {
            ans.push(`${uid}님이 나갔습니다.`);
        }
    });
    // 입장, 퇴장 기록
    for (let i=0; i < ans.length; i++) {
        let uid = ans[i].split('님')[0];
        ans[i] = ans[i].replace(uid, userInfo[uid]);
    }
    return ans;
}
