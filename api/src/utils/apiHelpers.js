

function authorErrorHandler(error, res) {
    if (error.message.includes("validation failed")) {
      return res.status(400).json({
        message: error.message,
      });
    }
    if (error.message.includes("Cast to ObjectId")) {
      return res.status(404).json({
        message: "Author not found",
      });
    }
    res.status(500).json({
      message: error.message,
    });
}

module.exports = {
    authorErrorHandler
}