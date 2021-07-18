const list = [
  500,
  700,
  100,
  100,
  300,
];

// This function first return the array resorted.
// That sort is from the number that less exist to the one that most exist.
// Then the function takes the last one (the one that most exist).
function calculateMode(arr) {
  return arr.sort((a,b) =>
  arr.filter(v => v===a).length
  - arr.filter(v => v===b).length
  ).pop();
}

const getMode = (list) => {
  mode = calculateMode(list);
  console.log(mode);
}