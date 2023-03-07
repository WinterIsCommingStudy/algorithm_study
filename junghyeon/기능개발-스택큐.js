/*
 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포
 100이상이 될때까지 얼마나걸리는지 체크
*/
function solution(progresses, speeds) {
    const result = []
    let nextDeploy = 0;
    for(let i =0; i < progresses.length; i++) {
        let feature = Math.ceil((100 - progresses[i]) / speeds[i])
        if(feature > nextDeploy) {
            result.push(1)
            nextDeploy = feature
        } else {
            result[result.length-1]++
        }
    }
    return result
}
