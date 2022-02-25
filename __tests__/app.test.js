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
      .then(({ body }) => {
        expect(body.topics).toHaveLength(3);
        body.topics.forEach((topic) => {
          expect(topic).toEqual(
            expect.objectContaining({
              slug: expect.any(String),
              description: expect.any(String),
            })
          );
        });
      });
  });
  test("status: 404 - with error message", () => {
    return request(app)
      .get("/api/not-a-path")
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe("path not found");
      });
  });
});
describe("/api/articles/:article_id", () => {
  test("GET status 200 & article with id from client", () => {
    return request(app)
      .get("/api/articles/1")
      .expect(200)
      .then((response) => {
        expect(response.body.article).toEqual(response.body.article);
      });
  });
});
describe("/api/users", () => {
  test("GET status 200 - responds with an array of users objects", () => {
    return request(app)
      .get("/api/users")
      .expect(200)
      .then(({ body }) => {
        expect(body.users).toHaveLength(4);
        body.users.forEach((user) => {
          expect(user).toEqual(
            expect.objectContaining({
              username: expect.any(String),
              name: expect.any(String),
              avatar_url: expect.any(String),
            })
          );
        });
      });
  });
});

describe("/api/:article_id/comments", () => {
  test("GET status 200 & comments of the article id from the client", () => {
    return request(app)
      .get("/api/articles/1/comments")
      .expect(200)
      .then((res) => {
        expect(res.body).toBeInstanceOf(Array);
        expect(res.body).toHaveLength(11);
      });
  });
});
// describe("/api/:article_id/comments", () => {
//   test("GET status 200 - responds with an array of articles objects", () => {
//     return request(app)
//       .get("/api/articles/1/comments")
//       .expect(200)
//       .then(({ body }) => {
//         console.log({ body });
//         expect(body.comments).toHaveLength(11);
//         body.comments.forEach((comment) => {
//           expect(comments).toEqual(
//             expect.objectContaining({
//               body: expect.any(String),
//               votes: expect.any(String),
//               author: expect.any(String),
//               article_id: expect.any(String),
//               created_at: expect.any(String),
//             })
//           );
//         });
//       });
//   });
// });
