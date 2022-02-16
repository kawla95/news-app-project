const request = require("supertest");
const app = require("../app");
const db = require("../db/connection");
const testData = require("../db/data/test-data/index");
const seed = require("../db/seeds/seed");

beforeEach(() => seed(testData));
afterAll(() => db.end());

describe("GET - api/topics", () => {
  test("status: 200 - responds with an array of topic objects", () => {
    return request(app)
      .get("/api/topics")
      .expect(200)
      .then((response) => {
        //console.log(response);
      });
  });
  test("status: 404 - path not found", () => {
    return request(app)
      .get("/api/channel")
      .expect(404)
      .then((response) => {
        console.log(response.error);
      });
  });
});
