function solution(word) {
  const weights = [781, 156, 31, 6, 1];
  const vowelMap = { A: 0, E: 1, I: 2, O: 3, U: 4 };

  return [...word].reduce(
    (total, char, idx) => total + vowelMap[char] * weights[idx] + 1,
    0
  );
}

// function solution(word) {
//     const vowels = ['A', 'E', 'I', 'O', 'U'];
//     let answer = word.length; // 최소 길이의 단어부터 시작하므로 초기값을 단어 길이로 설정

//     const weight = [781, 156, 31, 6, 1]; // 각 자릿수의 가중치 (5^4, 5^3, 5^2, 5^1, 5^0)

//     for (let i = 0; i < word.length; i++) {
//         const index = vowels.indexOf(word[i]); 
//         answer += index * weight[i];
//     }

//     return answer;
// }

// // 테스트 케이스
// console.log(solution("AAAAE"));  // 6
// console.log(solution("AAAE"));   // 10
// console.log(solution("I"));      // 1563
// console.log(solution("EIO"));    // 1189
