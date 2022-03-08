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
      res.status(200).send(comments);
    })
    .catch((err) => {
      next(err);
    });
};
// exports.getApiResponse = (req, res, next) => {
//   const apiDescription = {
//     "GET /api": {
//       description:
//         "serves up a json representation of all the available endpoints of the api",
//     },
//     "GET /api/topics": {
//       description: "serves an array of all topics",
//     },
//     "GET /api/articles": {
//       description: "serves an array of all topics",
//       exampleResponse: {
//         articles: [
//           {
//             title: "Seafood substitutions are increasing",
//             topic: "cooking",
//             author: "weegembump",
//             body: "Text from the article..",
//             created_at: 1527695953341,
//           },
//         ],
//       },
//     },
//     "GET /api/articles/:articleId": {
//       description: "serves an article object when provided a valid article ID",
//     },
//     "GET /api/articles/:articleId/comments": {
//       description:
//         "serves a comments object relating to an article when provided a valid article ID",
//     },
//   }
//     .then((apiDescription) => {
//       console.log(apiDescription);
//       res.status(200).send(apiDescription);
//     })
//     .catch((err) => {
//       next(err);
//     });
// };
