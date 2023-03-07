function solution(bridge_length, weight, truck_weights) {
    const bridge = []
    
    let limit_weight = weight;
    let onBridgeTruckWeight = 0;
    let result = 0;
    while(truck_weights.length){    // 대기트럭이 없을때까지 반복문 진행
        result++;
        if(bridge_length === bridge.length) {  // 다리위가 차면
            onBridgeTruckWeight -= bridge.shift(); //다리위에 있는 트럭중 가장 앞 트럭 제거 하며 다리위에 트럭 총 무게에서 빼준다
        }
        if(onBridgeTruckWeight + truck_weights[0] > limit_weight ) {   // 다리위에 있는 트럭과 대기 트럭 중 가장 앞 트럭의 합이 다리 무게제한보다 크면  
            bridge.push(0)  
            continue;
        }
        let cur_truck = truck_weights.shift()
        bridge.push(cur_truck)   // 대기 트럭중 가장 앞 트럭이 다리 진입
        onBridgeTruckWeight += cur_truck    // 다리위에 트럭 무게에 진입트럭 무게 더해주기
    } 
    console.log(bridge) 
    result += bridge_length         // 대기트럭이 없다면 반복문이 종료되기 때문에 다리위에 있는 마지막 트럭이 모두지나갈떄까지의 시간 즉, 다리의 길이를 더해줘야한다 
    return result
}
