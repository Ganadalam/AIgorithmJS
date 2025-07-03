function solution(maps) {
    const n = maps.length, m = maps[0].length;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 위 , 아래, 왼, 오
    const queue = [[0, 0, 1]];// [x좌표, y좌표, 이동거리]
  maps[0][0] = 0; // 시작 위치 방문 처리
    
    while (queue.length) {
        const [x, y, dist] = queue.shift();
        
        // 도착지 도달 시, 거리 반환
        if (x === n - 1 && y === m - 1) return dist;

        for (const [dx, dy] of directions) {
            const nx = x + dx, ny = y + dy;

            if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
                maps[nx][ny] = 0; // 방문 처리
                queue.push([nx, ny, dist + 1]);
            }
        }
    }

    return -1;
}
