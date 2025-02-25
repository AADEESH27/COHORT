const request = require("supertest");
const assert = require("assert");
describe("GET /user", function () {
  const userId = "testId";
  it("One request responds back correctly", function (done) {
    request("http://localhost:3000")
      .get("/user")
      .set("user-id", userId)
      .then((response) => {
        expect(response.status).toBe(200);
        done();
      });
  });

  it("5 or more requests return back a 404", function (done) {
    for (let i = 0; i < 5; i++) {
      request("http://localhost:3000")
        .get("/user")
        .set("user-id", userId)
        .then();
    }
    request("http://localhost:3000")
      .get("/user")
      .set("user-id", userId)
      .then((response) => {
        expect(response.status).toBe(404);
        done();
      });
  });

  it("5 or more requests and waiting returns a 200", function (done) {
    for (let i = 0; i < 5; i++) {
      request("http://localhost:3000")
        .get("/user")
        .set("user-id", userId)
        .then();
    }
    setTimeout(function () {
      request("http://localhost:3000")
        .get("/user")
        .set("user-id", userId)
        .then((response) => {
          expect(response.status).toBe(200);
          done();
        });
    }, 2000);
  });
});
