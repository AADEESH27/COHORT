const checkPalindrome = (string) => {
  const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedString = processedString.split("").reverse().join("");
  return processedString === reversedString;

  //   writing logic from scratch
  let i = 0;
  let j = processedString.length - 1;
  while (i <= j) {
    while (processedString[i] == " ") i++;
    while (processedString[j] == " ") j--;
    if (processedString[i] != processedString[j]) return false;
    i++;
    j--;
  }
  return true;
};

const input = "21Able, was I ere I saw Elba12!";
console.log(checkPalindrome(input));
