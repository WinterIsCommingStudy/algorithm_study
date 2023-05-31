const fs = require("fs");
const input = fs.readFileSync("suho/input.txt").toString().trim("").split("\n");

const KL = input.shift();
const [K, L] = KL.split(" ");
const students = input;
console.log(solution(K, students));

function solution(K, students) {
  const enroll = new Map();
  students.map((student, i) => {
    if (!enroll.has(student)) {
      enroll.set(student, i);
    } else {
      enroll.delete(student);
      enroll.set(student, i);
    }
  });
  let arr = [];
  for (const [a] of enroll) {
    arr.push(a);
  }

  return arr.splice(0, K).join("\n");
}
