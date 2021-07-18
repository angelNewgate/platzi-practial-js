const averageInput = document.querySelector("#averageInput");
const averageInputText = document.querySelector("#averageInputText");

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
  averageInputText.innerHTML = `Average: ${overcome.toFixed(2)}`;
}
