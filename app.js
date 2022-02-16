const express = require("express");
const app = express();
const {
  handleIncorrectPath,
  handleInternalServerError,
} = require("./errorhandling");

app.use(express.json());

const { getTopics, getArticleById } = require("./controllers/news");

app.get("/api/topics", getTopics);

app.get("/api/articles/:articleId", getArticleById);

app.all("/*", handleIncorrectPath);

app.use(handleInternalServerError);

module.exports = app;
