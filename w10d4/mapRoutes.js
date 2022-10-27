// # Maps

// - GET     /api/maps
// - POST    /api/maps
// - PUT     /api/maps/:map_id
// - DELETE  /api/maps/:map_id

app.get("/api/maps", (req, res) => {
  const maps = [{}, {}, {}];

  res.json(maps);
});

const fetchAllMaps = () => {
  return Promise.resolve([{}, {}, {}]);
};
app.get("/api/maps", (req, res) => {
  fetchAllMaps().then((maps) => {
    res.json(maps);
  });
});
