const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { Pool } = require("pg");
const generateJokeHelpers = require("./helpers/jokeHelpers");
const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  port: 5432,
  database: "jokes_yeah",
});
const app = express();

// const { fetchAllJokes, fetchJokeById, addAJoke } = generateJokeHelpers(pool);

const jokeHelpers = generateJokeHelpers(pool);
const { fetchAllJokes, fetchJokeById, addAJoke } = jokeHelpers;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("hello!");
});

app.get("/jokes", (req, res) => {
  fetchAllJokes().then((jokes) => {
    const templateVars = { jokes };
    res.render("jokes", templateVars);
  });
});

app.get("/jokes/new", (req, res) => {
  res.render("new_joke");
});

app.post("/jokes", (req, res) => {
  const { question, answer, author_id, rating } = req.body;
  addAJoke(question, answer, rating, author_id)
    .then((joke) => res.json(joke))
    .catch((err) => console.log(err));
});

app.get("/api/jokes", (req, res) => {
  fetchAllJokes().then((rows) => {
    res.json(rows);
  });
});

app.get("/api/jokes/:joke_id", (req, res) => {
  const joke_id = req.params.joke_id;
  fetchJokeById(joke_id).then((joke) => {
    res.json(joke);
  });
});

module.exports = app;
