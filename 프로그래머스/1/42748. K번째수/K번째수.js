function solution(array, commands) {
    let answer = [];
    
    for (let [i, j, k] of commands) {
        let sortedSubArray = array.slice(i - 1, j).sort((a, b) => a - b);
        answer.push(sortedSubArray[k - 1]);
    }

    return answer;
}
