/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const minHeap = [];
    
    function heapifyUp() {
        let index = minHeap.length - 1;
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (minHeap[parent] > minHeap[index]) {
                [minHeap[parent], minHeap[index]] = [minHeap[index], minHeap[parent]];
                index = parent;
            } else break;
        }
    }
    
    function heapifyDown() {
        let index = 0, length = minHeap.length;
        while (true) {
            let left = 2 * index + 1, right = 2 * index + 2, smallest = index;
            if (left < length && minHeap[left] < minHeap[smallest]) smallest = left;
            if (right < length && minHeap[right] < minHeap[smallest]) smallest = right;
            if (smallest !== index) {
                [minHeap[index], minHeap[smallest]] = [minHeap[smallest], minHeap[index]];
                index = smallest;
            } else break;
        }
    }
    
    for (let num of nums) {
        minHeap.push(num);
        heapifyUp();
        if (minHeap.length > k) {
            minHeap[0] = minHeap.pop();
            heapifyDown();
        }
    }
    
    return minHeap[0];
};