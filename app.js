const express = require("express");
const app = express();
const {
  handleIncorrectPath,
  handleInternalServerError,
} = require("./errorhandling");

const { getTopics } = require("./controllers/news");

app.get("/api/topics", getTopics);

app.all("/*", handleIncorrectPath);

app.use(handleInternalServerError);

module.exports = app;
