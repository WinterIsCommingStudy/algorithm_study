function solution(fees, records) {
  var answer = [];

  const [defaultTime, baseRate, unitTime, unitRate] = fees;

  let carIn = [];
  let carOut = [];
  const carHash = new Map();
  const inOfOut = (rec) => {
    rec.map((info) => {
      if (info.includes("IN")) {
        carIn.push(info);
      }
      if (info.includes("OUT")) {
        carOut.push(info);
      }
    });
  };
  inOfOut(records);

  const parkingTime = (carArray, i) => {
    let car = carArray[i].split(" ");
    const carInTime = car[0];
    return carInTime;
  };

  const parkingCarNumber = (carArray, i) => {
    let car = carArray[i].split(" ");
    const carInNum = car[1];
    return carInNum;
  };

  const time = (time) => {
    const hourMin = time.split(":").map(Number);
    const hour = parseInt(hourMin[0], 10) * 60;
    const min = parseInt(hourMin[1], 10);
    return hour + min;
  };

  const parkingMin = (carInTime, carInNum, carOut, j) => {
    const carOutTime = parkingTime(carOut, j);
    const outTime = time(carOutTime);
    const inTime = time(carInTime);
    const result = outTime - inTime;
    carOut.splice(j, 1);
    return result;
  };

  const notOutparkingMin = (carInTime) => {
    const outTime = time("23:59");
    const inTime = time(carInTime);
    const result = outTime - inTime;
    return result;
  };

  const timeHashSum = (carInNum, min) => {
    if (carHash.has(carInNum)) {
      carHash.set(carInNum, carHash.get(carInNum) + min);
    } else {
      carHash.set(carInNum, min);
    }
  };

  while (carIn.length >= 0) {
    if (carIn.length === 0) {
      break;
    }
    let carInTime = parkingTime(carIn, 0);
    let carInNum = parkingCarNumber(carIn, 0);

    let result = carOut.findIndex((car) => {
      return car.includes(carInNum);
    });
    if (result === -1) {
      let min = notOutparkingMin(carInTime);
      let a = timeHashSum(carInNum, min);
    } else {
      let min = parkingMin(carInTime, carInNum, carOut, result);
      timeHashSum(carInNum, min);
    }
    carIn.splice(0, 1);
  }
  function logMapElements(value, key, map) {
    if (value >= defaultTime) {
      let valueMinusDefaultTime = value - defaultTime;
      let ceil = Math.ceil(valueMinusDefaultTime / unitTime);
      let result = baseRate + ceil * unitRate;
      answer.push(result);
    } else {
      let result = baseRate;
      answer.push(result);
    }
  }
  let hashArray = [...carHash];
  let hashSort = hashArray.sort((a, b) => a[0] - b[0]); // value값 기준 내림차순정렬

  const newCarHash = new Map(hashSort);
  newCarHash.forEach(logMapElements);
  return answer;
}
//  const [defaultTime, baseRate, unitTime, unitRate] = fees;
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
);
// "05:34 5961 IN",
//     "06:00 0000 IN",
//     "07:59 0148 IN",
//     "18:59 0000 IN",
//     "22:59 5961 IN",

// "06:34 0000 OUT",
//     "07:59 5961 OUT",
//     "19:09 0148 OUT",
//     "23:00 5961 OUT",
