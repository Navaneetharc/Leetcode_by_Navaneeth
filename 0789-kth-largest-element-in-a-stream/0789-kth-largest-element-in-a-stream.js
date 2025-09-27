class MinHeap703 {   // unique name
    constructor() {
        this.heap = [];
    }
    swap(i, j) { [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]; }
    heapifyUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] > this.heap[i]) {
                this.swap(parent, i);
                i = parent;
            } else break;
        }
    }
    heapifyDown() {
        let i = 0;
        while (true) {
            let left = 2 * i + 1, right = 2 * i + 2, smallest = i;
            if (left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;
            if (smallest !== i) { this.swap(i, smallest); i = smallest; } else break;
        }
    }
    push(val) { this.heap.push(val); this.heapifyUp(); }
    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        let root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }
    peek() { return this.heap[0]; }
    size() { return this.heap.length; }
}

var KthLargest = function(k, nums) {
    this.k = k;
    this.minHeap = new MinHeap703();
    for (let num of nums) this.add(num);
};

KthLargest.prototype.add = function(val) {
    if (this.minHeap.size() < this.k) {
        this.minHeap.push(val);
    } else if (val > this.minHeap.peek()) {
        this.minHeap.pop();
        this.minHeap.push(val);
    }
    return this.minHeap.peek();
};
