const Author = require("../models/author.model");

async function createAuthor(req, res) {
  try {
    const _author = req.body;
    const author = await Author.create(_author);
    res.status(201).json(author);
  } catch (error) {
    console.error("Error creating author: ", error.message);
    if (error.message.includes("validation failed")) {
      return res.status(400).json({
        message: error.message,
      });
    }
    res.status(500).json({
      message: "Error creating author: " + error.message,
    });
  }
}

async function getAuthors(req, res) {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (error) {
    console.error("Error getting authors: ", error.message);
    res.status(500).json({
      message: "Error getting authors: " + error.message,
    });
  }
}

async function getAuthor(req, res) {
  const { id } = req.params;
  try {
    const author = await Author.findById(id);
    if (!author) {
      throw new Error("Cast to ObjectId");
    }
    res.json(author);
  } catch (error) {
    console.error("Error getting author: ", error.message);
    if (error.message.includes("Cast to ObjectId")) {
      return res.status(404).json({
        message: "Author not found",
      });
    }
    res.status(500).json({
      message: "Error getting authors: " + error.message,
    });
  }
}

async function updateAuthor(req, res) {
  try {
    //TODO: update author
    res.json("Unimplemented");
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

async function deleteAuthor(req, res) {
  try {
    //TODO: delete author
    res.json("Unimplemented");
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = {
  createAuthor,
  getAuthors,
  getAuthor,
  updateAuthor,
  deleteAuthor,
};
