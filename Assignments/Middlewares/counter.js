let count = 0;

function countRequests(request, response, next) {
  count++;
  next();
}

function getCount() {
  return count;
}

module.exports = { countRequests, getCount };
