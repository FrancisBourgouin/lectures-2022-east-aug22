const { Pool } = require("pg");

const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  port: 5432,
  database: "jokes_yeah",
});

// INSERT INTO
//   jokes (question, answer, rating, author_id)
// VALUES
//   ('Knock knock, whos there, to who', 'no, to whom',3, 1)
// ;
console.log(process.argv);

// const question = process.argv[2];
// const answer = process.argv[3];
// const rating = process.argv[4];
// const author_id = process.argv[5];

const [, , question, answer, rating, author_id] = process.argv;

const badQuery = `
INSERT INTO
  jokes (question, answer, rating, author_id)
VALUES
  ('${question}', '${answer}',${rating}, ${author_id})
RETURNING *
;
`;
const query = `
INSERT INTO
  jokes (question, answer, rating, author_id)
VALUES
  ($1, $2, $3, $4)
RETURNING *
;
`;

const showJokeInConsole = (jokeObj) => {
  console.log("🔥------------------------🔥");
  console.log(jokeObj.question);
  console.log(jokeObj.answer);
  console.log("Hahaha that was very funny.");
  console.log("🔥------------------------🔥\n\n");
};

pool
  .query(query, [question, answer, rating, author_id])
  .then((res) => res.rows[0])
  .then(showJokeInConsole)
  .catch((err) => console.log(err));
