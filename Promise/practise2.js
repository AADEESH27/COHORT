// function myResolve(num) {
//   return num;
// }

// function myPromise() {
//   return new Promise((myResolve, reject) => {
//     setTimeout(() => {
//       console.log("promise fullfilled");
//       myResolve(1);
//     }, 1000);
//   });
// }

// const result = myPromise();
// result
//   .then(function (value) {
//     console.log("promise resolved");
//     myPromise()
//       .then(function (value) {
//         console.log("promise resolved");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


// Simulate API calls with promises
function fetchRestaurants() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Restaurants fetched");
      resolve(["Pizza Place", "Sushi Spot", "Burger Joint"]);
    }, 1000);
  });
}

function getMenu(restaurant) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Menu fetched for ${restaurant}`);
      resolve(["Pizza", "Pasta", "Salad"]);
    }, 1000);
  });
}

function placeOrder(dish) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Order placed for ${dish}`);
      resolve({ orderId: 123, dish });
    }, 1000);
  });
}

function confirmOrder(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Order confirmed for ${order.dish}`);
      resolve({ deliveryTime: "30 minutes" });
    }, 1000);
  });
}

// Promise chaining example
fetchRestaurants()
  .then((restaurants) => {
    console.log("Available restaurants:", restaurants);
    return getMenu(restaurants[0]); // Choose the first restaurant
  })
  .then((menu) => {
    console.log("Menu items:", menu);
    return placeOrder(menu[0]); // Choose the first menu item
  })
  .then((order) => {
    console.log("Order details:", order);
    return confirmOrder(order);
  })
  .then((confirmation) => {
    console.log("Delivery details:", confirmation);
  })
  .catch((error) => {
    console.error("Something went wrong:", error);
  });
