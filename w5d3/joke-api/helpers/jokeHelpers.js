const generateJokeHelpers = (pool) => {
  const fetchAllJokes = () => {
    return pool
      .query(
        "SELECT *, jokes.id AS joke_id FROM jokes JOIN authors ON authors.id = jokes.author_id"
      )
      .then((dbRes) => dbRes.rows);
  };

  const addAJoke = (question, answer, author_id, rating) => {
    const query = `
  INSERT INTO
    jokes (question, answer, rating, author_id)
  VALUES
    ($1, $2, $3, $4)
  RETURNING *
  ;
  `;
    return pool
      .query(query, [question, answer, rating, author_id])
      .then((res) => res.rows[0]);
  };

  const fetchJokeById = (joke_id) => {
    const query =
      "SELECT *, jokes.id AS joke_id FROM jokes JOIN authors ON authors.id = jokes.author_id WHERE jokes.id = $1";

    pool.query(query, [joke_id]).then((dbRes) => dbRes.rows[0]);
  };

  const fetchJokeRandom = () => {
    return new Promise.resolve({
      id: 16,
      question: "How do you know that a mathematician planted a tree?",
      answer: "It has square roots",
      rating: 5,
      author_id: 3,
    });
  };

  return { fetchAllJokes, fetchJokeById, addAJoke, fetchJokeRandom };
};

module.exports = generateJokeHelpers;
