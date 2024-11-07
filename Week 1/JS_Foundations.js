//arrays
const personArray = ["aadeesh", "vasu", "aps"];
const genderArray = ["male", "male", "female"];

for (let i = 0; i < personArray.length; i++) {
  if (genderArray[i] === "male") {
    // console.log(personArray[i]);
  }
}

//objects
const user1 = {
  name: "aadeesh",
  gender: "male",
};
// console.log(Object.keys(user1));
console.log(user1["name"]);

//array of objects
const t = [1, 2, 3, 4, 5, 6];
const allUsers = [
  { name: "aadeesh", gender: "male" },
  { name: "vasu", gender: "male", metadata: { age: 21, city: "jammu" } },
  { name: "aps", gender: "female" },
];

const allUsersData = allUsers.map((key) => {
  return key;
});
console.log(allUsersData);

const tData = t.filter((key) => {
  return key % 2 === 0;
});
console.log(tData);

const sumReduce = (total, num) => {
  return total + num;
};
const tDataAccum = t.reduce(sumReduce, 4);
console.log(tDataAccum);

//functions
function sum(a, b) {
  let result = a + b;
  return result;
}

function sub(a, b) {
  let result = 0;
  if (a >= b) {
    result = a - b;
  } else {
    result = b - a;
  }
  return result;
}

//arrow functions
console.log("Arrow");
const arr = t.map((item) => {
  return item * 2;  
});
console.log(arr);
//callbacks
function calculator(a, b, arithmaticOperation) {
  console.log(arithmaticOperation(a, b));
}

// calculator(4, 9, sub);
