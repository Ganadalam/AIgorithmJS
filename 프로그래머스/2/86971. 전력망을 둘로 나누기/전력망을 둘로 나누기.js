function solution(n, wires) {
  const graph = Array.from({ length: n + 1 }, () => []);

  wires.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  const bfs = (start, skipA, skipB) => {
    const visited = Array(n + 1).fill(false);
    const q = [start];
    visited[start] = true;
    let count = 1;

    while (q.length) {
      const node = q.shift();
      graph[node].forEach((next) => {
        if (!visited[next] && !(node === skipA && next === skipB) && !(node === skipB && next === skipA)) {
          visited[next] = true;
          q.push(next);
          count++;
        }
      });
    }

    return count;
  };

  let min = n;

  for (const [a, b] of wires) {
    const count = bfs(a, a, b);
    min = Math.min(min, Math.abs(count - (n - count)));
  }

  return min;
}

// function solution(n, wires) {
//     const bfs = (graph, start) => {
//         const visited = Array(n + 1).fill(false);
//         const queue = [start];
//         let count = 1;
//         visited[start] = true;

//         while (queue.length) {
//             const node = queue.shift();
//             graph[node].forEach(next => {
//                 if (!visited[next]) {
//                     visited[next] = true;
//                     queue.push(next);
//                     count++;
//                 }
//             });
//         }
//         return count;
//     };

//     let minDiff = n;
//     wires.forEach(([a, b]) => {
//         const graph = Array.from({ length: n + 1 }, () => []);
//         wires.filter(([x, y]) => x !== a || y !== b).forEach(([x, y]) => {
//             graph[x].push(y);
//             graph[y].push(x);
//         });
//         minDiff = Math.min(minDiff, Math.abs(bfs(graph, a) - (n - bfs(graph, a))));
//     });

//     return minDiff;
// }
