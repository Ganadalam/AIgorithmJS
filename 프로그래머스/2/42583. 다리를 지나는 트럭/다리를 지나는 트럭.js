function solution(bridge_length, weight, truck_weights) {
  const bridge = Array(bridge_length).fill(0);
  let time = 0, total = 0;

  while (truck_weights.length || total > 0) {
    time++;
    total -= bridge.shift();

    const next = truck_weights[0];
    if (total + next <= weight) {
      bridge.push(truck_weights.shift());
      total += next;
    } else {
      bridge.push(0);
    }
  }

  return time;
}
