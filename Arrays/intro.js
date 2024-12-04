const newArr = new Array(1, 2, 3, 4, 5);
const newArr2 = new Array(8, 9, 10, 11, 12);
console.log(
  newArr.find((element) => {
    return element % 2 !== 0;
  })
);
//combine two arrays
const res = [...newArr, ...newArr2]; //slightly faster
const res2 = newArr.concat(newArr2); //slower
console.log(res);
console.log(res2);
console.log(newArr);
console.log(newArr2);

//add array elements into a string
const strArr = newArr.join();
console.log(`String form of [${newArr}] is ${strArr}`);

// slice[start, end)
const sliceArr = newArr.slice(-3);
console.log(`${sliceArr}`);

//splice add, replace or removes the elements
const spliceArr = newArr.splice(0, 4, 7, 8, 9, 10);
console.log(`splice array is ${spliceArr}`); // removed elements
console.log(newArr); // modified new array
