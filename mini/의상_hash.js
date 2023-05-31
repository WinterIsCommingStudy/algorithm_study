//의상

//각 종류별로 최대 1가지 의상만 착용할 수 있다.
//하루에 최소 한 개의 의상은 입는다.
function solution(clothes) {
  let sum = 1;

  let obj = {};
  for (let cloth of clothes) {
    obj[cloth[1]] = (obj[cloth[1]] || 0) + 1;
  }
  // const obj = clothes.reduce((prev, curr) => {
  //   prev[[curr[1]]] = (prev[curr[1]] || 0) + 1;
  //   return prev;
  // }, {});

  for (let key in obj) {
    sum *= obj[key] + 1;
  }

  return sum - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
);
