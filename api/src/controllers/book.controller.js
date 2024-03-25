const Book = require("../models/book.model");
const { bookErrorHandler } = require("../utils/apiHelpers");

function createBook(req, res) {
  try {
    res.json("unimplemented");
  } catch (error) {
    bookErrorHandler(error, res);
  }
}

function getBooks(req, res) {
  try {
    //TODO handle author query
    res.json("unimplemented");
  } catch (error) {
    bookErrorHandler(error, res);
  }
}
function getBook(req, res) {
  try {
    res.json("unimplemented");
  } catch (error) {
    bookErrorHandler(error, res);
  }
}

function updateBook(req, res) {
  try {
    res.json("unimplemented");
  } catch (error) {
    bookErrorHandler(error, res);
  }
}

function deleteBook(req, res) {
  try {
    res.json("unimplemented");
  } catch (error) {
    bookErrorHandler(error, res);
  }
}

module.exports = {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
};
