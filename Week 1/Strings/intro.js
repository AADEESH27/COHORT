//this method calls the string constructor
//.slice and substring takes index start and end(exclusive)
const greet = new String("Hello!");
console.log(greet.valueOf());
console.log(greet.charAt(4));
console.log(greet.substring(2, greet.length + 1));
console.log(greet.slice(-4,-1));
