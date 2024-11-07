const initialArray = [1, 2, 3];

//pop takes out from the last, changes the original array
console.log(initialArray.pop());
// console.log(initialArray);

//shift takes out from the starting of the array
console.log(initialArray.shift());
// console.log(initialArray);

//unshift adds in the beginning of the array
console.log(initialArray.unshift(1));
// console.log(initialArray);

//push appends at the ending and returns the length of the array
console.log(initialArray.push(3));

console.log(initialArray);

const firstArray = [10, 11, 12];
const secondArray = [13, 14, 15];
const combinedArray = firstArray.concat(secondArray);
console.log(combinedArray);

//for each is a callback funtion which takes another function as a argument.
const display = (str) => {
    console.log(str);
}
combinedArray.forEach(display);

const changedArray = combinedArray.splice(1, 3, [1, 2, 3]);
console.log(changedArray);