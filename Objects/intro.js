//no singleton with using object literals
const id = Symbol("id"); // works as a unique identifier
const user1 = { name1: "Aadeesh", age1: 23 };
const user2 = { name2: "Aparna", age2: 23 };
const user3 = { name3: "fat", age3: 23 };
const users = Object.assign({}, user1, user2, user3);
console.log(users);
