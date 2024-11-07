function doSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
function sumtill100() {
  console.log(doSum(100)) ;
}
setTimeout(sumtill100, 1000);
