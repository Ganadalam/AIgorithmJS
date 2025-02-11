function solution(participant, completion) {
    var answer = '';
    let runnerMap = new Map();
    
    // 참가자 이름 등장 횟수 세기
    for (let player of participant) {
        runnerMap.set(player, (runnerMap.get(player) || 0) + 1);
    }

    // 완주한 선수는 횟수 감소
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


// 한 명만 낙오,  이름, 등장횟수 => 해시맵(키값, 씽)
// input = 참여선수 이름들, 완주선수 이름들
// 동명이인가능
// 이름 몇개인지 세고, push
// 하나이면, 걍 삭제, 둘 이상이면 --


