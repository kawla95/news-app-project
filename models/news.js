const { response } = require("express");
const db = require("../db/connection");

exports.selectTopics = () => {
  return db.query(`SELECT * FROM topics;`).then((response) => {
    return response.rows;
  });
};
exports.selectArticle = (articleId) => {
  return db
    .query(
      `SELECT * FROM articles
        WHERE article_id = $1
      ;`,
      [articleId]
    )
    .then((response) => {
      //console.log(response);
      return response.rows[0];
    });
};
exports.selectUsers = () => {
  return db.query(`SELECT * FROM users;`).then((response) => {
    //console.log(response.rows);
    return response.rows;
  });
};
exports.selectArticles = () => {
  return db
    .query(`SELECT * FROM articles ORDER BY created_at DESC;`)
    .then((response) => {
      console.log(response.rows);
      return response.rows;
    });
};
