function solution(clothes) {
    let clothesMap = new Map();
    
    for (let [item, category] of clothes) {
        if (clothesMap.has(category)) {
            clothesMap.set(category, clothesMap.get(category) + 1);
        } else {
            clothesMap.set(category, 1);
        }
    }
    
    let answer = 1;     // 각 의상 종류마다 선택할 수 있는 경우의 수는 (해당 의상 개수 + 1).
    for (let count of clothesMap.values()) {
        answer *= (count + 1);
    }
    return answer - 1;         // 최소 한 개의 의상은 입어야 하므로 1을 빼.
}

