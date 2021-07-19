// HELPERS | Utilities

const isEven = (number) => {
  return (number % 2 === 0);
}

// MEAN CALCULATOR

const meanSalaries = (list) => {
  const middle = parseInt(list.length / 2);

  if (isEven(list.length)) {
    const p1 = list[middle - 1];
    const p2 = list[middle];
    const meanSalaries = (p1 + p2)/2;
    return (meanSalaries);
  }
  else {
    const middlePerson = list[middle];
    return middlePerson;
  }
}

// General MEAN

const mexicoSalaries = mexico.map(
  function (person) {
    return person.salary;
  }
);

const mexicoSalariesSorted = mexicoSalaries.sort((a, b) => a - b);
const generalSalaryMexico = meanSalaries(mexicoSalariesSorted);

// MEAN OF THE 10%

const spliceStart = (mexicoSalariesSorted.length * 90) /100;
const spliceCount = (mexicoSalariesSorted.length - spliceStart);
const topTenSalariesMexico = mexicoSalariesSorted.splice(spliceStart, spliceCount);

const topTenMeanSalariesMexico = meanSalaries(topTenSalariesMexico);
console.log(
  generalSalaryMexico
);