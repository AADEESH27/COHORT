function calculateTotalSpentByCategory(transactions) {
  //getting the desired object with category and price
  const resultObject = {};
  transactions.forEach((transaction) => {
    const { category, price } = transaction;
    if (!resultObject[category]) resultObject[category] = 0;
    resultObject[category] += price;
  });

  //converting it into an array of objects
  const categories = Object.keys(resultObject);
  return result = categories.map((category) => {
    return {
      category: category,
      totalSpent: resultObject[category], //category = 'food' works similar to resultObject["food"]
    };
  });
}
const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656105600000,
    price: 20,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656134400000,
    price: 30,
    category: "Food",
    itemName: "Sushi",
  },
];

console.log(calculateTotalSpentByCategory(transactions));
