function solution(people, limit) {
  people.sort((a, b) => a - b); // 몸무게 오름차순 정렬
  let start = 0;
  let end = people.length - 1;
  let boats = 0;

  while (start <= end) {
    // 가장 가벼운 사람 + 가장 무거운 사람을 함께 태울 수 있으면 start++
    if (people[start] + people[end] <= limit) {
      start++;
    }
    end--; // 무거운 사람은 항상 탑승
    boats++;
  }

  return boats;
}
