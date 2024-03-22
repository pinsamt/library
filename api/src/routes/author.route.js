const Express = require("express");

const {
  createAuthor,
  getAuthors,
  getAuthor,
  updateAuthor,
  deleteAuthor,
} = require("../controllers/author.controller");

const authorRouter = Express.Router();

authorRouter.post("/", createAuthor);
authorRouter.get("/", getAuthors);
authorRouter.get("/:id", getAuthor);
authorRouter.put("/:id", updateAuthor);
authorRouter.delete("/:id", deleteAuthor);

module.exports = authorRouter;
