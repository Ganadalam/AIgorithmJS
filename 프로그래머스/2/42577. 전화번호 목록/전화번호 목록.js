function solution(phone_book) {
    let phoneMap = new Map();

    // 1. 모든 번호를 해시에 저장
    for (let number of phone_book) {
        phoneMap.set(number, true);
    }

    // 2. 각 번호에 대해 접두사가 해시에 있는지 확인
    for (let number of phone_book) {
        let prefix = "";
        for (let digit of number) {
            prefix += digit;
            if (prefix !== number && phoneMap.has(prefix)) {
                return false; // 접두사 발견
            }
        }
    }

    return true; // 접두사 없음
}

// 접두사
// 그러니까 
// 1) 번호 123의 길이 알기, 짧거나 같은 길이 => 앞 글자에 포함 여부 chexk
// 값- 쌍 => 시
// phone_book[i]