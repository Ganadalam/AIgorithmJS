function solution(citations) {
  citations.sort((a, b) => b - a);
  return citations.findIndex((c, i) => c <= i) !== -1
    ? citations.findIndex((c, i) => c <= i)
    : citations.length;
}
