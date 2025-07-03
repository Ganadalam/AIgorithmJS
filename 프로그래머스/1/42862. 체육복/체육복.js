function solution(n, lost, reserve) {
  // 자기 자신이 도난 + 여벌 모두 있는 경우 정리
  const realLost = lost.filter(l => !reserve.includes(l)).sort();
  const realReserve = reserve.filter(r => !lost.includes(r)).sort();

  const available = new Set(realReserve);

  for (let i = 0; i < realLost.length; i++) {
    const student = realLost[i];
    if (available.has(student - 1)) {
      available.delete(student - 1);
      realLost[i] = -1; // 빌려받음 표시
    } else if (available.has(student + 1)) {
      available.delete(student + 1);
      realLost[i] = -1; // 빌려받음 표시
    }
  }

  const notCovered = realLost.filter(num => num !== -1).length;
  return n - notCovered;
}
