// Sum Numbers
function sum(numbers) {
  let sum = 0;
  if (numbers.length === 0) {
    return 0;
  } else {
    numbers.forEach((element, index) => {
      sum += element;
    });
  }
  return sum;
}
