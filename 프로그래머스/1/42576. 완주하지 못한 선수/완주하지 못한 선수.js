function solution(participant, completion) {
    var answer = '';
    let runnerMap = new Map();
    
    for (let player of participant) {
        runnerMap.set(player, (runnerMap.get(player) || 0) + 1);
    }

    for (let player of completion) {
        runnerMap.set(player, runnerMap.get(player) - 1); // 🔥 수정
    }

    // 0이 아닌 값 찾기 (완주하지 못한 선수)
    for (let [key, value] of runnerMap) {
        if (value > 0) {
            answer = key;
            break;
        }
    }

    return answer;
}


