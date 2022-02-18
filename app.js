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
} = require("./controllers/news");

app.get("/api/topics", getTopics);

app.get("/api/articles/:articleId", getArticleById);

app.get("/api/users", getUsers);

app.get("/api/articles", getArticles);

app.all("/*", handleIncorrectPath);

app.use(handleInternalServerError);

module.exports = app;
