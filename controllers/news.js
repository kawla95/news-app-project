const {
  selectTopics,
  selectArticle,
  selectUsers,
  selectArticles,
  selectCommentsByArticleId,
} = require("../models/news");

exports.getTopics = (req, res, next) => {
  selectTopics()
    .then((topics) => {
      res.status(200).send({ topics });
    })
    .catch((err) => {
      next(err);
    });
};
exports.getArticleById = (req, res, next) => {
  const { articleId } = req.params;
  selectArticle(articleId)
    .then((article) => {
      res.status(200).send({ article });
    })
    .catch((err) => {
      next(err);
    });
};
exports.getUsers = (req, res, next) => {
  selectUsers()
    .then((users) => {
      res.status(200).send({ users });
    })
    .catch((err) => {
      next(err);
    });
};
exports.getArticles = (req, res, next) => {
  selectArticles()
    .then((articles) => {
      res.status(200).send(articles);
    })
    .catch((err) => {
      next(err);
    });
};
exports.getCommentsByArticleId = (req, res, next) => {
  const { articleId } = req.params;
  selectCommentsByArticleId(articleId)
    .then((comments) => {
      if (comments.length > 0) {
        res.status(200).send(comments);
      } else {
        return Promise.reject({ status: 404, msg: "Path not found" });
      }
    })
    .catch((err) => {
      next(err);
    });
};
