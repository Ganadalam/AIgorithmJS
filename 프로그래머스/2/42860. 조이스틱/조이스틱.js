function solution(name) {
  let answer = 0;
  let move = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    // 상/하 최소 조작 횟수 계산
    let charCode = name.charCodeAt(i);
    answer += Math.min(charCode - 65, 91 - charCode);

    // 좌/우 커서 이동 최적화 계산
    let next = i + 1;
    while (next < name.length && name[next] === 'A') {
      next++;
    }

    move = Math.min(move, i + name.length - next + Math.min(i, name.length - next));
  }

  answer += move;
  return answer;
}
