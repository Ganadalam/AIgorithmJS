function solution(n, lost, reserve) {
  // 겹치는 학생 제거
  const realLost = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b);
  const realReserve = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b);

  const borrowed = new Set();

  for (const student of realLost) {
    if (realReserve.includes(student - 1) && !borrowed.has(student - 1)) {
      borrowed.add(student - 1);
    } else if (realReserve.includes(student + 1) && !borrowed.has(student + 1)) {
      borrowed.add(student + 1);
    } else {
      // 못 빌린 경우만 카운트
      n -= 1;
    }
  }

  return n;
}
