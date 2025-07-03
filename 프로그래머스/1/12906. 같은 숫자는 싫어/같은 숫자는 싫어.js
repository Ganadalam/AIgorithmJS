function solution(arr) {
  const result = [];

  arr.forEach((num, index) => {
    if (index === 0 || arr[index - 1] !== num) {
      result.push(num);
    }
  });

  return result;
}
