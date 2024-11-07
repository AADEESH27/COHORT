const findLargestElement = (array) => {
  let largest = array[0];
  for (let i = 1; i < array.length; i++) {
    largest = Math.max(largest, array[i]);
  }
  return largest;
};

const input = [-3.5, -7.2, -2.1, -9.8, -1.9];
console.log(findLargestElement(input));
