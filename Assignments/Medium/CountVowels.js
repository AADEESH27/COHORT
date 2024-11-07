const countVowels = (string) => {
  const checkForVowels = new Set(["a", "e", "i", "o", "u"]);
  const processedString = string.toLowerCase();
  let countVowels = 0;
  for (let i = 0; i < processedString.length; i++) {
    if (checkForVowels.has(processedString[i])) countVowels++;
    // for (let j = 0; j < checkForVowels.length; j++) {
    //   if (processedString[i] == checkForVowels[j]) countVowels++;
    // }
  }
  return countVowels;
};

console.log(countVowels("aEIOU"));
