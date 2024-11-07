const getSum = () => {
  return new Promise((resolve, reject) => {
    let sum = 0;
    for (let i = 0; i < 1e9; ++i) {
      sum += i;
    }
    resolve(sum);
  });
};

// async function getAns() {
//   try {
//     let ans = await getSum();
//     console.log(ans);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAns();
function valueBy2(value) {
  return new Promise((res, rej) => {
    res(value / 2);
  });
}
const ans = getSum();
ans
  .then((value) => {
    console.log(value);
    return valueBy2(value);
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("hello");

const arr = [1, 2, 3, [4, [5], 6, [7, 8, 9, [10]]]];
console.log(arr.flat(Infinity));

function flatArray(arr, ans, i, length) {
  if (i == length) {
    return ans;
  }
  if (Array.isArray(arr[i])) {
    flatArray(arr[i], ans, 0, arr[i].length);
  } else {
    ans.push(arr[i]);
  }
  flatArray(arr, ans, ++i, length);
  return ans;
}
console.log(flatArray(arr, [], 0, arr.length));
