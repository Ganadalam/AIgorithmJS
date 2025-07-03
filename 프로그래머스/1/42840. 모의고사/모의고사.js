function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ];

  const scores = patterns.map(pattern =>
    answers.filter((a, i) => a === pattern[i % pattern.length]).length
  );

  const max = Math.max(...scores);
  return scores
    .map((s, i) => (s === max ? i + 1 : null))
    .filter(Boolean);
}

// function solution(answers) {
    // 수포자들의 찍기 패턴
//    const patterns = [
//        [1, 2, 3, 4, 5],               // 1번 수포자
//        [2, 1, 2, 3, 2, 4, 2, 5],      // 2번 수포자
//        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] // 3번 수포자
//    ];

    // 정답 개수를 저장할 배열
  //  const scores = [0, 0, 0];

    // 정답 비교
 //   answers.forEach((answer, index) => {
 //       patterns.forEach((pattern, pIndex) => {
 //           if (answer === pattern[index % pattern.length]) {
 //               scores[pIndex]++;
 //           }
 //       });
 //   });

    // 최고 점수 계산
//    const maxScore = Math.max(...scores);

    // 최고 점수를 받은 사람 찾기
//    return scores
//        .map((score, index) => (score === maxScore ? index + 1 : null))
//        .filter((v) => v !== null);
//}
