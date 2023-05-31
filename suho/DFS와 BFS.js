const fs = require("fs");
const input = fs.readFileSync("suho/input.txt").toString().trim().split("\n");

[N, M, V] = input.shift().split(" ").map(Number);
const line = input.map((n) => n.split(" ").map(Number));
console.log(line);
