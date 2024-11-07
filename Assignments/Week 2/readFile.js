var fs = require("fs");
fs.readFile("test.txt", "utf-8", (err, res) => {
  console.log(res);
});

let sum = 0;
for (let i = 0; i < 1e5; i++) {
  sum += i;
}
console.log(sum);

setTimeout(() => {
  fs.appendFile("test.txt", "hello", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Success");
    }
  });
}, 500);

fs.readFile("test.txt", "utf-8", (err, res) => {
  console.log(res);
});
