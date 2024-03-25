const Express = require("express");
const cors = require("cors");
const authorRouter = require("./routes/author.route");
const bookRouter = require("./routes/book.route");

const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "Library API",
  });
});

app.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
  })
);

app.use("/api/v1/authors", authorRouter);
app.use("/api/v1/books", bookRouter);

module.exports = app;
