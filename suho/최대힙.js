class Heap {
  constructor() {
    this.heap = [null];
  }

  pushHeap(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = Math.floor(curIdx / 2);

    while (curIdx > 1 && this.heap[parIdx] < this.heap[curIdx]) {
      [this.heap[parIdx], this.heap[curIdx]] = [
        this.heap[curIdx],
        this.heap[parIdx],
      ];
      curIdx = parIdx;
      parIdx = Math.floor(curIdx / 2);
    }
    return this.heap;
  }

  popHeap() {
    const max = this.heap[1];
    if (this.heap.length <= 2) {
      this.heap = [null];
    } else {
      this.heap[1] = this.heap.pop();
    }

    let parIdx = 1;
    let leftIdx = parIdx * 2;
    let rightIdx = parIdx * 2 + 1;

    if (!this.heap[leftIdx]) return max;

    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] > this.heap[parIdx]) {
        [this.heap[leftIdx], this.heap[parIdx]] = [
          this.heap[parIdx],
          this.heap[leftIdx],
        ];
      }
      return max;
    }
    while (
      this.heap[leftIdx] > this.heap[parIdx] ||
      this.heap[rightIdx] > this.heap[parIdx]
    ) {
      const maxIdx =
        this.heap[leftIdx] > this.heap[rightIdx] ? leftIdx : rightIdx;

      [this.heap[parIdx], this.heap[maxIdx]] = [
        this.heap[maxIdx],
        this.heap[parIdx],
      ];

      parIdx = maxIdx;
      leftIdx = maxIdx * 2;
      rightIdx = maxIdx * 2 + 1;
    }
    return max;
  }

  resultMaxHeap() {
    if (this.heap.length < 2) {
      return 0;
    } else {
      const max = this.heap[1];
      this.popHeap();
      return max;
    }
  }
}

const heap = new Heap();
const fs = require("fs");
const input = fs.readFileSync("suho/input.txt").toString().trim("").split("\n");

const N = input.shift();
const X = input.map(Number);
function maxHeap(value) {
  const arr = value;
  let result = [];
  arr.map((x) => {
    if (x === 0) {
      result.push(heap.resultMaxHeap());
    } else {
      heap.pushHeap(x);
    }
  });
  return result.join("\n");
}

console.log(maxHeap(X));
