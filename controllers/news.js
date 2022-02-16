const { selectTopics, selectArticle } = require("../models/news");

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
  console.log(articleId);
  selectArticle(articleId)
    .then((receivedArticleObject) => {
      res.status(200).send({ receivedArticleObject });
    })
    .catch((err) => {
      next(err);
    });
};
