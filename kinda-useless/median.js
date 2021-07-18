const averageInputTextB = document.querySelector("#averageInputTextB");

const calculateAverage = (list) => {
  let total = 0;
  list.forEach((number) => {
    total += number;
  });
  const average = total / list.length;
  return average;
}

const list1 = [
    500,
    700,
    100,
    300,
    300,
  ];

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