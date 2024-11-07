//length
//its length not length() because length of a string is a property not a method it does not inlcude any computation on string
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);

//String Methods: All strings method does not change the string but returns a new one instead, strings are immutable.
//single characters at given positions
text = "hello world";
let char = text.charAt(6);
console.log(char);

let revChar = text.at(-1);
console.log(revChar);

//parts of strings
//slice(start, end) end not included
let str = "Apple, Banana, Kiwi";
let subStr1 = str.slice(3, 5);
let subStr2 = str.slice(3); // starts from the given position and returns all till ending
console.log(subStr1);
console.log(subStr2);

//substr(start, length)
let subStr3 = str.substr(3, 7);
console.log(subStr3);

//case conversion 
let textLower = text.toLowerCase()
let textUpper = text.toUpperCase();
console.log(textLower);
console.log(textUpper);

//concat
let hello = "hello";
let world = "world";
let result = hello.concat(" ", world);
console.log(result);

//trim
let testTrim = "                                         Hello                                ";
console.log(testTrim.trim());

//replace
let testReplace = "hello world";
console.log(testReplace.replace("world", "javascript"));

//extracting all words from a string in an array
let testSplit = "ZlJrnABG iMbTHsYO VRgmKzxN YbWpzHOG OvMQjBIa";
console.log(testSplit.split(" "));