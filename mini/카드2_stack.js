// 카드2
const fs = require("fs");
const N = fs.readFileSync("./Baekjoon/input.txt").toString().trim();

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.length) return undefined;
    const temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}

const list = new DoublyLinkedList();

for (let i = 1; i <= +N; i++) {
  list.push(i);
}

while (list.length !== 1) {
  list.shift();
  const movedCard = list.shift();
  list.push(movedCard.val);
}

console.log(list.head.val);
// ================================
// (1)
// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
// const binary = parseInt(input).toString(2).slice(1);
// const result = parseInt(binary, 2);

// console.log(result ? result * 2 : input);

// ================================
// 시간 초과 (근데 틀리진 않음)
// const list = Array.from({ length: +N }, (v, i) => i + 1);
// // const list = Array.from(Array(+N), (v, i) => i + 1);

// while (list.length !== 1) {
//   list.shift();
//   const movedCard = list.shift();
//   list.push(movedCard);
//   console.log("list :", list);
// }

// console.log(list[0]);
