const Express = require("express");

const { createAuthor } = require("../controllers/author.controller");

const authorRouter = Express.Router()

authorRouter.post("/", createAuthor);

module.exports = authorRouter