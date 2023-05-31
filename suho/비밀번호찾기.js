const fs = require("fs");
const input = fs.readFileSync("suho/input.txt").toString().trim("").split("\n");

const NM = input.shift();
const [N, M] = NM.split(" ");
const sitePassword = input.splice(0, N);
const findSite = input;
let site = [];
let password = [];
sitePassword.map((sitePassword) => {
  let [s, p] = sitePassword.split(" ");
  site.push(s);
  password.push(p);
});

solution(site, password, findSite);

function solution(site, password, findSite) {
  const sitePassword = new Map();
  for (let i = 0; i < site.length; i++) {
    sitePassword.set(site[i], password[i]);
  }
  findSite.map((site) => {
    console.log(sitePassword.get(site));
  });
}
