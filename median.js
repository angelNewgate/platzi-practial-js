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

const getMedian = (list) => { 
  const sortedList = list.sort((a, b) => a - b);
  // console.log(list);
  const middleList = parseInt(sortedList.length / 2);
  let median;
  if (isEven(sortedList.length)) {
      const e1 = sortedList[middleList - 1];
      const e2 = sortedList[middleList];
      const averageMedian = calculateAverage([e1, e2]);
      median = averageMedian;
      // console.log(median);
  }
  else {
    median = sortedList[middleList];
    // console.log(median);
  }
}