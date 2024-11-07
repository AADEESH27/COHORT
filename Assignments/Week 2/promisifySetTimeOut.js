function wait(n) {
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
      console.log("resolved");
    }, n * 1000);
  });
  return p;
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

const ans = wait(5);
ans.then((val) => {
  console.log(val);
});
