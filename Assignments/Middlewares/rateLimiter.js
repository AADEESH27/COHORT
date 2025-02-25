let numberOfRequestsForUser = {};

setInterval(function () {
  numberOfRequestsForUser = {};
}, 1000);

function rateLimiter(request, response, next) {
  const userId = request.query["userId"];
  if (!numberOfRequestsForUser[userId]) {
    numberOfRequestsForUser[userId] = 1;
  }
  ++numberOfRequestsForUser[userId];
  console.log(numberOfRequestsForUser[userId]);
  if (numberOfRequestsForUser[userId] > 5) {
    response.status(404).json({ message: "Limit Reached" });
  }
  next();
}

module.exports = { rateLimiter };
