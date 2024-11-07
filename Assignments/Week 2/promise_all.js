function wait1(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Result from wait 1");
    }, t);
  });
}

function wait2(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Result from wait 2");
    }, t);
  });
}

function wait3(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Result from wait 3");
    }, t);
  });
}

function calculateTime(t1, t2, t3) {
  const start = Date.now();
  Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then((res) => {
    console.log(res);
    const end = Date.now();
    return end - start;
  });
}

calculateTime(2000, 3000, 1000);
