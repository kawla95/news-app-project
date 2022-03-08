const express = require("express");
const app = express();
const {
  handleIncorrectPath,
  handleInternalServerError,
} = require("./errorhandling");

const {
  getTopics,
  getArticleById,
  getUsers,
  getArticles,
  getCommentsByArticleId,
  getApiResponse,
} = require("./controllers/news");

app.use(express.json());

app.get("/api/topics", getTopics);

app.get("/api/articles/:articleId", getArticleById);

app.get("/api/users", getUsers);

app.get("/api/articles", getArticles);

app.get("/api/articles/:articleId/comments", getCommentsByArticleId);

app.get("/api", getApiResponse);

app.all("/*", handleIncorrectPath);

app.use(handleInternalServerError);

module.exports = app;
