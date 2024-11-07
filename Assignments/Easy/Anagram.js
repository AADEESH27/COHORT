function checkAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length != str2.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let i = 0; i < str1.length; i++) {
    frequencyCounter1[str1[i]] = (frequencyCounter1[str1[i]] || 0) + 1;
    frequencyCounter2[str2[i]] = (frequencyCounter2[str2[i]] || 0) + 1;
  }
  console.log(frequencyCounter1);
  for (let char in frequencyCounter1) {
    if (frequencyCounter1[char] !== frequencyCounter2[char]) return false;
  }
  return true;

  //brute force
  for (let i = 0; i < str1.length; i++) {
    let j = 0;
    while (j < str2.length) {
      if (str1[i] == str2[j]) break;
      j++;
    }
    if (j == str2.length) return false;
  }
  return true;
}
console.log(checkAnagram("School MASTER", "The ClassROOM") ? "true" : "false");
