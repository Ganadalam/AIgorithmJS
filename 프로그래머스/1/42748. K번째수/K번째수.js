// map() 활용 함수형 처리, 체인으로 직접 접근[k-1] (중간변수 X 바로 return)
function solution(array, commands) {
  return commands.map(
    ([i, j, k]) => array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]
  );
}
// 기존: 반복방식(for... of loop 사용), 중간변수: answer 배열 변수 선언 및 push(), 정렬된 배열을 변수 할당 후 사용