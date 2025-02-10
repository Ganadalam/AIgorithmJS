function solution(numbers) {
    let answer = numbers.map(String)
                        .sort((a, b) => (b + a).localeCompare(a + b)) //.localeCompare 대신 - 사용 가능
                        .join('');
    return answer[0] === '0' ? '0' : answer;
}

