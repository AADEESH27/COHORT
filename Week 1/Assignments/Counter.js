let start = 30;
function count() {
  if (start === 0) clearInterval(counter);
  console.log(start);
  start--;
}
if (start === 0) clearInterval();
const counter = setInterval(count, 500);