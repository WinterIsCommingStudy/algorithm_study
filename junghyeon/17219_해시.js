const filePath = process.platform === "linux" ? "/dev/stdin" : "ex.txt";
let array = require("fs").readFileSync(filePath).toString().trim().split("\n");
let [N, M] = array.shift().split(" ");

const obj = {};
let i = 0;
while (N--) {
  const [site, pw] = array[i].split(" ");
  obj[site] = pw;
  i++;
}

while (M--) {
  console.log(obj[array[i]]);
  i++;
}
