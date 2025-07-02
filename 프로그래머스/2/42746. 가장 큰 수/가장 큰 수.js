function solution(numbers) {
  const result = numbers
    .map(String)
    .sort((a, b) => (b + a).localeCompare(a + b))
    .join('');

  return result.startsWith('0') ? '0' : result;
}
