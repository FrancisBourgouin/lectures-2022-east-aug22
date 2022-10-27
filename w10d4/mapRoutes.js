// # Maps

// - GET     /api/maps
// - POST    /api/maps
// - PUT     /api/maps/:map_id
// - DELETE  /api/maps/:map_id

// STEP 0

app.get("/api/maps", (req, res) => {
  const maps = [{}, {}, {}];

  res.json(maps);
});

// STEP 1 (WHAT YOU DID IN LIGHTBNB WEB)

const fetchAllMaps = () => {
  return Promise.resolve([{}, {}, {}]);
};
app.get("/api/maps", (req, res) => {
  fetchAllMaps().then((maps) => {
    res.json(maps);
  });
});

// STEP 2 (WHAT YOU DID IN LIGHTBNB WEB)

const fetchAllMaps2 = () => {
  return db.query("...").then((res) => res.rows);
};
app.get("/api/maps", (req, res) => {
  fetchAllMaps().then((maps) => {
    res.json(maps);
  });
});
