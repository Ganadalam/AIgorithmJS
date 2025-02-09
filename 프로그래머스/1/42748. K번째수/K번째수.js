function solution(array, commands) {
    let answer = [];
// 문제접근법 1) 정렬이 필요한가? YES > sort() 사용
// 2) 배열 자르기 -> slice, K번째 요소 = K - 1, 반복문실행 = commands.length
    
    for (let [i, j, k] of commands) {
        let sortedSubArray = array.slice(i - 1, j).sort((a, b) => a - b);
        answer.push(sortedSubArray[k - 1]);
    }

    return answer;
}
