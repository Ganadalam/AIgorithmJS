function solution(n, computers) {
  const visited = new Array(n).fill(false);

  function dfs(node) {
    visited[node] = true;
    for (let next = 0; next < n; next++) {
      if (computers[node][next] === 1 && !visited[next]) {
        dfs(next);
      }
    }
  }

  let networkCount = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      networkCount++;
    }
  }

  return networkCount;
}

// function solution(n, computers) {
//   const visited = Array(n).fill(false);

//   function dfs(i) {
//     visited[i] = true;
//     for (let j = 0; j < n; j++) {
//       if (computers[i][j] === 1 && !visited[j]) {
//         dfs(j);
//       }
//     }
//   }

//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     if (!visited[i]) {
//       dfs(i);
//       count++;
//     }
//   }

//   return count;
// }

// // 유니온 파인드(Disjoint Set) 풀이 :
// // 블록 단위 파악 ez, 
// // 시간복잡도:(경로 압축 시) 약 O(n log n), 확장성 good, 
// // 기억구조: 부모배열(집합관리) (cf. 방문 배열
// // function solution(n, computers) {
// //   const parent = Array.from({ length: n }, (_, i) => i);

// //   function find(x) {
// //     if (parent[x] !== x) parent[x] = find(parent[x]); // 경로 압축
// //     return parent[x];
// //   }

// //   function union(a, b) {
// //     const rootA = find(a);
// //     const rootB = find(b);
// //     if (rootA !== rootB) parent[rootB] = rootA;
// //   }

// //   for (let i = 0; i < n; i++) {
// //     for (let j = 0; j < n; j++) {
// //       if (i !== j && computers[i][j] === 1) {
// //         union(i, j);
// //       }
// //     }
// //   }

// //   const uniqueRoots = new Set(parent.map(find));
// //   return uniqueRoots.size;
// // }
