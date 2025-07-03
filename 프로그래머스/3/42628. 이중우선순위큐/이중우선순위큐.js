function solution(operations) {
  const queue = [];

  for (const op of operations) {
    const [cmd, value] = op.split(' ');
    const num = parseInt(value);

    if (cmd === "I") {
      queue.push(num);
    } else if (cmd === "D") {
      if (queue.length === 0) continue;
      if (num === 1) {
        // 최댓값 삭제
        const maxIdx = queue.indexOf(Math.max(...queue));
        queue.splice(maxIdx, 1);
      } else if (num === -1) {
        // 최솟값 삭제
        const minIdx = queue.indexOf(Math.min(...queue));
        queue.splice(minIdx, 1);
      }
    }
  }

  if (queue.length === 0) return [0, 0];

  return [Math.max(...queue), Math.min(...queue)];
}
