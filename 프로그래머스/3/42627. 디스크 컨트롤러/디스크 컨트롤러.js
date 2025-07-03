function solution(jobs) {
  jobs.sort((a, b) => a[0] - b[0]); // 요청 시간 기준 정렬
  const heap = [];
  let now = 0;
  let totalTime = 0;
  let i = 0;
  let count = 0;

  while (count < jobs.length) {
    // 현재 시점까지 요청된 작업들을 heap에 넣기
    while (i < jobs.length && jobs[i][0] <= now) {
      const [start, time] = jobs[i];
      heap.push([time, start]); // 소요시간 기준 minHeap
      heap.sort((a, b) => a[0] - b[0]);
      i++;
    }

    if (heap.length > 0) {
      const [time, start] = heap.shift();
      now += time;
      totalTime += now - start; // 요청 시점부터 종료까지의 시간
      count++;
    } else {
      // 작업 대기 중이 없으면 다음 요청까지 점프
      now = jobs[i][0];
    }
  }

  return Math.floor(totalTime / jobs.length);
}
