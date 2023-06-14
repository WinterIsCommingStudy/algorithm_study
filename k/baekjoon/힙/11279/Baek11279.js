const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(value => +value);
const N = input[0];
const answer = [];
const heap = new MaxHeap();
for (let i = 1; i <= N; i++) {
    let value = input[i];
    if (value) {
        heap.insert(value);
    } else {
        answer.push(heap.remove());
    }
}

console.log(answer.join("\n"));
function MaxHeap() {
    this.heap = [0];
    
    this.size = () => this.heap.length;
    
    this.insert = (value) => {
        this.heap.push(value);
        let index = this.heap.length - 1;
        while (index >  1 && this.heap[index] > this.heap[Math.floor(index / 2)]) {
            let temp = this.heap[Math.floor(index / 2)];
            this.heap[Math.floor(index / 2)] = this.heap[index];
            this.heap[index] = temp;
            index = Math.floor(index / 2);
        }
    }
    
    this.remove = () => {
        if (this.heap.length - 1 < 1) {
            return 0;
        }
        
        let deletedItem = this.heap[1];
        
        this.heap[1] = this.heap[this.heap.length - 1];
        this.heap.pop();
        let index = 1;
        while (index * 2 < this.heap.length) { // 정리 과정
            let maxValue = this.heap[index * 2];
            let maxIndex = index * 2;
            if (index * 2 + 1 < this.heap.length && maxValue < this.heap[index * 2 + 1]) {
                maxValue = this.heap[index * 2 + 1];
                maxIndex = index * 2 + 1;
            }
            if (this.heap[index] > maxValue) break;
            
            let temp = this.heap[maxIndex];
            this.heap[maxIndex] = this.heap[index];
            this.heap[index] = temp;
            index = maxIndex;
        }
        
        return deletedItem;
    }
}
