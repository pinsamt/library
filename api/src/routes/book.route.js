const Express = require("express");
const {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
} = require("../controllers/book.controller");

const bookRouter = Express.Router();

bookRouter.post("/", createBook);
bookRouter.get("/", getBooks);
bookRouter.get("/:id", getBook);
bookRouter.put("/:id", updateBook);
bookRouter.delete("/:id", deleteBook);

module.exports = bookRouter
