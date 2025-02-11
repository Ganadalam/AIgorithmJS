function solution(nums) {
    var answer = 0; // 결과값 초기화
    
    // 1. 중복을 제거하여 폰켓몬 종류 개수 구하기
    const uniqueTypes = new Set(nums);
    
    // 2. 선택 가능한 폰켓몬 수 계산 (N/2)
    const maxPick = nums.length / 2;
    
    // 3. 최대 선택 가능한 폰켓몬 종류 개수 결정
    answer = Math.min(uniqueTypes.size, maxPick);
    
    return answer;
}

