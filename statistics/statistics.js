const statisticsInput = document.querySelector("#statisticsInput");
const statisticsInputTextA = document.querySelector("#statisticsInputTextA");
const statisticsInputTextB = document.querySelector("#statisticsInputTextB");
const statisticsInputTextC = document.querySelector("#statisticsInputTextC");
const statisticsInputTextD = document.querySelector("#statisticsInputTextD");

const list1 = [
  100,
  300,
  500,
  700,
];

// MEAN
const calculateMean = (list) => {
  // let total = 0;
  // list.forEach((number) => {
  //   total += number;
  // });
  // const average = total / list.length;
  // return average;
  let array = list.split(", ");
  let addElements = array.reduce((e1, e2) => Number(e1) + Number(e2));
  return mean = addElements / array.length;
}

const getMean = () => {
  const value = statisticsInput.value;
  let overcome = calculateMean(value);
  statisticsInputTextA.innerHTML = `Mean: ${overcome.toFixed(2)}`;
}

// MEDIAN
  
const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  else {
    return false;
  }  
}

const calculateMedian = (list) => {
  const array = list.split(", ");
  const sortedList = array.sort((a, b) => a - b);
  const middleList = parseInt(sortedList.length / 2);
  let median;
  if (isEven(sortedList.length)) {
      const e1 = sortedList[middleList - 1];
      const e2 = sortedList[middleList];
      console.log(e2);
      const meanMedian = (Number(e1) + Number(e2)) /2;
      median = meanMedian;
      return median;
      // console.log(median);
  }
  else {
    median = sortedList[middleList];
    return median;
  }
}

const getMedian = () => {
  const value = statisticsInput.value;
  const median = calculateMedian(value);
  // console.log(median);
  statisticsInputTextB.innerHTML = `Median: ${parseFloat(median)}`;
}

//MODE
const calculateMode = (list) => {
  let array = list.split(", ");
  return array.sort((a,b) =>
  array.filter(v => v===a).length
  - array.filter(v => v===b).length
  ).pop();
}

const getMode = () => {
  const value = statisticsInput.value;
  const mode = calculateMode(value);
  statisticsInputTextC.innerHTML = `Mode: ${parseFloat(mode)}`;
  // console.log(mode);
}

// GEOMETRIC MEAN
const calculateGeometricMean = (list) => {
  let array = list.split(", ");
  // total = 0;
  // array.forEach((number) => {
  //   total *= number;
  // });
  const multiplication = array.reduce((a, b) => a *= b);
  const geometricMean = Math.pow(multiplication, 1/array.length).toFixed(2);
  return geometricMean;
}

const getGeometricMean = () => {
  const value = statisticsInput.value;
  const geometricMean = calculateGeometricMean(value);
  statisticsInputTextD.innerHTML = `Geometric mean: ${geometricMean}`;
} 