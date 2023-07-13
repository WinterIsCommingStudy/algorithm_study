// 주차 요금 계산
function solution(fees, records) {
  const [DefaultTime, BaseRate, UnitTime, UnitRate] = fees;
  const cars = [];
  let arr = {};

  function calculateTime(IN, OUT) {
    IN = IN.match(/\b\d{2}:\d{2}\b/);
    OUT = OUT.match(/\b\d{2}:\d{2}\b/);

    const [hours1, minutes1] = IN.toString().split(":");
    const [hours2, minutes2] = OUT.toString().split(":");

    const time1 = new Date();
    time1.setHours(hours1);
    time1.setMinutes(minutes1);

    const time2 = new Date();
    time2.setHours(hours2);
    time2.setMinutes(minutes2);

    const timeDiffInMilliseconds = Math.abs(time2 - time1);
    const timeDiffInMinutes = Math.floor(timeDiffInMilliseconds / (1000 * 60));

    return timeDiffInMinutes;
  }

  records.forEach((car) => {
    const carNum = car.match(/\d{4}/g).toString();
    if (!arr[carNum]) {
      arr[carNum] = 0;
    }
    const exist = cars.find((x) => x.match(/\d{4}/g).toString() === carNum);
    if (exist) {
      const time = calculateTime(exist, car);
      arr[carNum] += time;
      cars.splice(cars.indexOf(exist), 1);
    } else {
      cars.push(car);
    }
  });

  if (cars) {
    cars.forEach((car) => {
      const carNum = car.match(/\d{4}/g).toString();
      const out = car.replace(/\b\d{2}:\d{2}\b/, "23:59").replace("IN", "OUT");
      const time = calculateTime(car, out);
      arr[carNum] += time;
    });
  }

  const result = [];
  Object.keys(arr)
    .sort((a, b) => a.localeCompare(b))
    .forEach((key) => {
      const value = arr[key];
      result.push(value);
    });

  const resultFee = result.map((time) => {
    if (time <= DefaultTime) {
      return BaseRate;
    } else {
      return BaseRate + Math.ceil((time - DefaultTime) / UnitTime) * UnitRate;
    }
  });

  return resultFee;
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
);
// console.log(
//   solution(
//     [120, 0, 60, 591],
//     [
//       "16:00 3961 IN",
//       "16:00 0202 IN",
//       "18:00 3961 OUT",
//       "18:00 0202 OUT",
//       "23:58 3961 IN",
//     ]
//   )
// );
// console.log(solution([1, 461, 1, 10], ["00:00 1234 IN"]));

//(1)
// function solution(fees, records) {
//   const parkingTime = {};
//   records.forEach((r) => {
//     let [time, id, type] = r.split(" ");
//     let [h, m] = time.split(":");
//     time = h * 1 * 60 + m * 1;
//     console.log(time);
//     if (!parkingTime[id]) parkingTime[id] = 0;
//     // if (type === "IN") parkingTime[id] -= time;
//     // if (type === "OUT") parkingTime[id] += time;
//     if (type === "IN") parkingTime[id] += 1439 - time;
//     if (type === "OUT") parkingTime[id] -= 1439 - time;
//     console.log(id, ":", parkingTime[id]);
//   });
//   const answer = [];
//   for (let [car, time] of Object.entries(parkingTime)) {
//     if (time <= fees[0]) time = fees[1];
//     else time = Math.ceil((time - fees[0]) / fees[2]) * fees[3] + fees[1];
//     answer.push([car, time]);
//   }
//   return answer.sort((a, b) => a[0] - b[0]).map((v) => v[1]);
// }
