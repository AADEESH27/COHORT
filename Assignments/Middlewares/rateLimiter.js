let numberOfRequestsForUser = {};

setInterval(function () {
  numberOfRequestsForUser = {};
}, 1000);

function rateLimiter(request, response, next) {
  let count = 0;
  const name = request.query["name"];
  numberOfRequestsForUser[name] = ++count;
  if (numberOfRequestsForUser[name] > 5) {
    response.status(404).json({ message: "Limit Reached" });
  }
  next();
}

module.exports = { rateLimiter };
