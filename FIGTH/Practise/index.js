const button = document.getElementById("button");
function counter() {
  let count = 0;
  return {
    increment() {
      count++;
      return count;
    },
  };
}
const myCounter = counter();
button.addEventListener("click", () => {
  console.log(myCounter.increment());
});

function get1() {
  return 11;
}
console.log("first");
const temp = () => {
  return new Promise((resolve, reject) => {
    const res = get1();
    if (res == 1) {
      resolve("got one");
    } else {
      reject("didn't get one");
    }
  });
};

const getRes = async () => {
  try {
    const res = await temp();
    console.log("async-await", res);
  } catch (error) {
    console.log("Error", error);
  }
};

getRes();
console.log("second");
