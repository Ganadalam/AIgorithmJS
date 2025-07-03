function solution(sizes) {
  return sizes
    .map(([w, h]) => [Math.max(w, h), Math.min(w, h)])
    .reduce(
      ([maxW, maxH], [w, h]) => [Math.max(maxW, w), Math.max(maxH, h)],
      [0, 0]
    )
    .reduce((acc, cur) => acc * cur, 1);
}
