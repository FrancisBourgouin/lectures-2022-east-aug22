const { Pool } = require("pg");

const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  port: 5432,
  database: "jokes_yeah",
});

const sampleData = [
  {
    id: 1,
    question: "Knock knock, whos there, to who",
    answer: "no, to whom",
    rating: 3,
    author_id: 1,
  },
  {
    id: 2,
    question: "How is a bouncer at a club like a dish soap?",
    answer: "They both DETER GENTS",
    rating: 5,
    author_id: 2,
  },
];
// ---
// question
// answer
// hahaha
// ---

const showJokeInConsole = (jokeObj) => {
  console.log("🔥------------------------🔥");
  console.log(jokeObj.question);
  console.log(jokeObj.answer);
  console.log("Hahaha that was very funny.");
  console.log("🔥------------------------🔥\n\n");
};

const showAllJokes = (jokeList) => {
  for (const joke of jokeList) {
    showJokeInConsole(joke);
  }
};

// showJokeInConsole(sampleData[1]);

// showAllJokes(sampleData);

pool
  .query("SELECT * FROM jokes")
  .then((dbRes) => dbRes.rows)
  .then(showAllJokes)
  .catch((err) => console.log(err))
  .finally(() => pool.end());

// const urlDatabase = {
//   "sqoksqo":"http://google.com"
// }

// templateVars = {urls:urlDatabase}

// const urlDatabase2 = {
//   "sqoksqo":{
//     longUrl:"http://google.com",
//     userId:"dokd"
//   }
// }

// const urlsForUser = (urls, userId) => {
//   const output = {}
//   for(const shortUrl in urls){
//     output[shortUrl] = urls[shortUrl].longUrl
//   }
// }
