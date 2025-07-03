function solution(rectangle, characterX, characterY, itemX, itemY) {
  const SIZE = 102;
  const map = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));

  // 사각형 테두리만 마킹
  for (const [x1, y1, x2, y2] of rectangle) {
    const [sx, sy, ex, ey] = [x1 * 2, y1 * 2, x2 * 2, y2 * 2];
    for (let x = sx; x <= ex; x++) {
      for (let y = sy; y <= ey; y++) {
        // 테두리만 1로 표시
        if (x === sx || x === ex || y === sy || y === ey) {
          if (map[x][y] !== 2) map[x][y] = 1;
        } else {
          map[x][y] = 2; // 내부 공간: 장애물 처리
        }
      }
    }
  }

  const visited = Array.from({ length: SIZE }, () => Array(SIZE).fill(false));
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];

  const queue = [[characterX * 2, characterY * 2, 0]];
  visited[characterX * 2][characterY * 2] = true;

  while (queue.length) {
    const [x, y, dist] = queue.shift();
    if (x === itemX * 2 && y === itemY * 2) return dist / 2;

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 && nx < SIZE &&
        ny >= 0 && ny < SIZE &&
        map[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny, dist + 1]);
      }
    }
  }

  return -1;
}

// function isBoundary(x, y, map) {
//     if (map[x][y] === 0) return false;

//     // 상, 하, 좌, 우로 내부 공간이 있는지 확인
//     const dx = [0, 0, -1, 1];
//     const dy = [-1, 1, 0, 0];
//     for (let i = 0; i < 4; i++) {
//         const nx = x + dx[i];
//         const ny = y + dy[i];
//         if (map[nx][ny] === 0) return true;
//     }
//     return false;
// }

// function bfs(start, end, map) {
//     const queue = [[...start, 0]];
//     const visited = Array.from({ length: 102 }, () => Array(102).fill(false));
//     visited[start[0]][start[1]] = true;

//     // 이동 방향 (상, 하, 좌, 우)
//     const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

//     while (queue.length > 0) {
//         const [x, y, distance] = queue.shift();

//         if (x === end[0] && y === end[1]) return distance;

//         for (const [dx, dy] of directions) {
//             const nx = x + dx;
//             const ny = y + dy;

//             if (nx >= 0 && nx < 102 && ny >= 0 && ny < 102 && !visited[nx][ny]) {
//                 if (map[nx][ny] === 1 && isBoundary(nx, ny, map)) {
//                     visited[nx][ny] = true;
//                     queue.push([nx, ny, distance + 1]);
//                 }
//             }
//         }
//     }
//     return -1;
// }

// function solution(rectangle, characterX, characterY, itemX, itemY) {
//     // 좌표값을 2배로 확장하여 맵 크기 설정
//     const map = Array.from({ length: 102 }, () => Array(102).fill(0));

//     // 직사각형 그리기 (2배 좌표로 변환)
//     rectangle.forEach(([x1, y1, x2, y2]) => {
//         x1 *= 2; y1 *= 2; x2 *= 2; y2 *= 2;
//         for (let x = x1; x <= x2; x++) {
//             for (let y = y1; y <= y2; y++) {
//                 map[x][y] = 1;
//             }
//         }
//     });

//     // 내부 공간 제거 (테두리만 남김)
//     rectangle.forEach(([x1, y1, x2, y2]) => {
//         x1 *= 2; y1 *= 2; x2 *= 2; y2 *= 2;
//         for (let x = x1 + 1; x < x2; x++) {
//             for (let y = y1 + 1; y < y2; y++) {
//                 map[x][y] = 0;
//             }
//         }
//     });

//     // 시작과 끝 좌표를 2배로 확장
//     const start = [characterX * 2, characterY * 2];
//     const end = [itemX * 2, itemY * 2];

//     // BFS로 최단 거리 탐색
//     return bfs(start, end, map) / 2;
// }

// // 테스트 케이스
// console.log(solution([[1,1,7,4],[3,2,5,5],[4,3,6,9],[2,6,8,8]], 1, 3, 7, 8));  // 예상: 17
// console.log(solution([[1,1,8,4],[2,2,4,9],[3,6,9,8],[6,3,7,7]], 9, 7, 6, 1));  // 예상: 11
// console.log(solution([[1,1,5,7]], 1, 1, 4, 7));                              // 예상: 9
// console.log(solution([[2,1,7,5],[6,4,10,10]], 3, 1, 7, 10));                 // 예상: 15
// console.log(solution([[2,2,5,5],[1,3,6,4],[3,1,4,6]], 1, 4, 6, 3));          // 예상: 10
