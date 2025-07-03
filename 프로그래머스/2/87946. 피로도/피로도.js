function solution(k, dungeons) {
  let max = 0;
  const visited = Array(dungeons.length).fill(false);

  const dfs = (energy, count) => {
    max = Math.max(max, count);

    dungeons.forEach(([req, cost], i) => {
      if (!visited[i] && energy >= req) {
        visited[i] = true;
        dfs(energy - cost, count + 1);
        visited[i] = false;
      }
    });
  };

  dfs(k, 0);
  return max;
}
//function solution(k, dungeons) {
//    let maxCount = 0;

//    function explore(remainingK, count, unused) {
//        maxCount = Math.max(maxCount, count);

//        unused.forEach((dungeon, index) => {
//            const [minReq, cost] = dungeon;
//            if (remainingK >= minReq) {
//                const nextUnused = [...unused];
//                nextUnused.splice(index, 1); // 탐험한 던전 제거
//                explore(remainingK - cost, count + 1, nextUnused);
//            }
//        });
//    }

//    explore(k, 0, dungeons);
//    return maxCount;
//}
