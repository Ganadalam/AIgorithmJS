function solution(number, k) {
  const stack = [];

  for (let digit of number) {
    while (k > 0 && stack.length && stack[stack.length - 1] < digit) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }

  // k가 남았다면 뒤에서 제거
  return stack.slice(0, stack.length - k).join('');
}
