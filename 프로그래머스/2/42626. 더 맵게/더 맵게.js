class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    let i = this.heap.length - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.heap[p] <= this.heap[i]) break;
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
    }
  }

  pop() {
    if (this.heap.length <= 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    let i = 0;
    const len = this.heap.length;
    while (true) {
      let left = 2 * i + 1, right = 2 * i + 2;
      let smallest = i;

      if (left < len && this.heap[left] < this.heap[smallest]) smallest = left;
      if (right < len && this.heap[right] < this.heap[smallest]) smallest = right;

      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
    return min;
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}

function solution(scoville, K) {
  const heap = new MinHeap();
  scoville.forEach(val => heap.push(val));

  let count = 0;
  while (heap.size() > 1 && heap.peek() < K) {
    const first = heap.pop();
    const second = heap.pop();
    const mixed = first + second * 2;
    heap.push(mixed);
    count++;
  }

  return heap.peek() >= K ? count : -1;
}
