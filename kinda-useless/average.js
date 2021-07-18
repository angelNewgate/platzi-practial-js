const averageInput = document.querySelector("#averageInput");
const averageInputTextA = document.querySelector("#averageInputTextA");
const averageInputTextB = document.querySelector("#averageInputTextB");
const averageInputTextC = document.querySelector("#averageInputTextC");
const averageInputTextD = document.querySelector("#averageInputTextD");

const list1 = [
  100,
  300,
  500,
  700,
];

// Average
const calculateAverage = (list) => {
  // let total = 0;
  // list.forEach((number) => {
  //   total += number;
  // });
  // const average = total / list.length;
  // return average;
  let array = list.split(", ");
  let addElements = array.reduce((e1, e2) => Number(e1) + Number(e2));
  return average = addElements / array.length;
}

const getAverage = () => {
  const value = averageInput.value;
  let overcome = calculateAverage(value);
  averageInputTextA.innerHTML = `Average: ${overcome.toFixed(2)}`;
}

// Median
  
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
      const averageMedian = (Number(e1) + Number(e2)) /2;
      median = averageMedian;
      return median;
      // console.log(median);
  }
  else {
    median = sortedList[middleList];
    return median;
  }
}

const getMedian = () => {
  const value = averageInput.value;
  const median = calculateMedian(value);
  // console.log(median);
  averageInputTextB.innerHTML = `Median: ${parseFloat(median)}`;
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
  const value = averageInput.value;
  const mode = calculateMode(value);
  averageInputTextC.innerHTML = `Mode: ${parseFloat(mode)}`;
  // console.log(mode);
}

// Geometric mean
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
  const value = averageInput.value;
  const geometricMean = calculateGeometricMean(value);
  averageInputTextD.innerHTML = `Geometric mean: ${geometricMean}`;
} 