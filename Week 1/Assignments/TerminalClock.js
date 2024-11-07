function clearConsole() {
    process.stdout.write('\x1Bc'); // Clear screen
    process.stdout.write('\x1B[3J'); // Clear scroll buffer
  }
function displayClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const timeString = `${hours}:${minutes}:${seconds}`;
  console.log(timeString);
}

displayClock();
setInterval(() => {
    clearConsole();
    displayClock();
}, 1000);
