function solution(tickets) {
  const graph = {};

  for (const [from, to] of tickets) {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
  }

  // 사전순 경로를 위해 뒤집은 정렬 → pop()으로 사용
  for (const from in graph) {
    graph[from].sort().reverse();
  }

  const route = [];

  function dfs(airport) {
    const destList = graph[airport];
    while (destList && destList.length > 0) {
      const next = destList.pop();  // 사전순 앞순서부터 꺼냄
      dfs(next);
    }
    route.push(airport);  // 도착 지점을 경로에 추가 (후위순회)
  }

  dfs("ICN");
  return route.reverse();  // 실제 경로는 역순
}

// function solution(tickets) {
//   const n = tickets.length;
//   const routes = [];

//   // 그래프 구성 (from → [to1, to2, ...])
//   const graph = {};
//   for (const [from, to] of tickets) {
//     if (!graph[from]) graph[from] = [];
//     graph[from].push(to);
//   }

//   // 사전순 정렬
//   for (const key in graph) {
//     graph[key].sort();
//   }

//   function dfs(curr, path, usedCount) {
//     if (usedCount === n) {
//       routes.push([...path]);
//       return true; // 첫 경로 찾으면 탈출
//     }

//     if (!graph[curr]) return false;

//     const nextList = graph[curr];
//     for (let i = 0; i < nextList.length; i++) {
//       const next = nextList[i];
//       if (next === null) continue; // 이미 사용한 항공권이면 skip

//       // 티켓 사용
//       nextList[i] = null;
//       path.push(next);

//       const found = dfs(next, path, usedCount + 1);
//       if (found) return true; // 사전순 경로면 바로 종료

//       // 복구 (백트래킹)
//       path.pop();
//       nextList[i] = next;
//     }

//     return false;
//   }

//   dfs("ICN", ["ICN"], 0);
//   return routes[0];
// }
