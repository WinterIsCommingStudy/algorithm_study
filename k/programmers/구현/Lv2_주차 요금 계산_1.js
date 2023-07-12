function solution(fees, records) {
    const answer = [];
    const carIn = {};
    let carOut = {};
    const [baseT, baseF, unitT, unitF] = fees;
    
    // 시간 계산
    records.map((item) => {
        const [clock, num, record] = item.split(' ');
        const [hour, min] = clock.split(':');
        const time = parseInt(hour) * 60 + parseInt(min);
        
        if (record === 'IN') {
            carIn[num] = time;
        } else {
            carOut.hasOwnProperty(num)
                ? carOut[num] = carOut[num] + time - carIn[num]
                : carOut[num] = time - carIn[num];
            delete carIn[num];
        }
    });
    // 오늘 출차하지 않은 차량
    for (const [num, time] of Object.entries(carIn)) {
        carOut.hasOwnProperty(num)
            ? carOut[num] = carOut[num] + 1439 - time
            : carOut[num] = 1439 - time;
        delete carIn[num];
    }
    // 차량번호 오름차순 정렬
    carOut = Object.entries(carOut).sort((a,b) => a[0] - b[0]);
    
    // 요금 계산
    carOut.map((item) => {
        const time = item[1];
        answer.push(
            time <= baseT
                ? baseF
                : baseF + Math.ceil((time - baseT) / unitT) * unitF
        );
    })
    return answer;
}
