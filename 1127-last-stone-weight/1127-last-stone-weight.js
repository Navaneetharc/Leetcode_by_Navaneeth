/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
     const heap = [];

  function heapifyUp() {
    let index = heap.length - 1;
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (heap[parent] < heap[index]) {
        [heap[parent], heap[index]] = [heap[index], heap[parent]];
        index = parent;
      } else break;
    }
  }

  function heapifyDown() {
    let index = 0;
    const n = heap.length;
    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let largest = index;

      if (left < n && heap[left] > heap[largest]) largest = left;
      if (right < n && heap[right] > heap[largest]) largest = right;

      if (largest !== index) {
        [heap[index], heap[largest]] = [heap[largest], heap[index]];
        index = largest;
      } else break;
    }
  }

  function push(val) {
    heap.push(val);
    heapifyUp();
  }

  function extractMax() {
    if (heap.length === 0) return null;
    if (heap.length === 1) return heap.pop();
    const max = heap[0];
    heap[0] = heap.pop();
    heapifyDown();
    return max;
  }

  for (const s of stones) push(s);

  while (heap.length > 1) {
    const y = extractMax();
    const x = extractMax();
    if (y !== x) push(y - x);
  }

  return heap.length ? heap[0] : 0;
};