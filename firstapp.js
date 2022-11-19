var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

const app = express();
const port = process.env.PORT || 9000;
var db = require("./database.js");

app.get("/", (req, res) => {
  res.type("text/plain");
  res.send("Server Expresso ☕");
});
app.get("/about", (req, res) => {
  res.type("text/plain");
  res.send("Server Expresso ☕ About");
});

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../client/build")));
app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/testAPI", testAPIRouter);
app.use("/login", loginRouter);
app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 Not found ☕_☕");
});
app.listen(port, () =>
  console.log(`Expresso ☕ is on Port ${port} Ctrl + C to Stop `)
);
