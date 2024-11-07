function displayTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  console.log(hours, minutes, seconds);
}

setInterval(() => {
  displayTime();
}, 1000);
