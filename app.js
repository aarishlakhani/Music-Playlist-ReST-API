const express = require("express");
const res = require("express/lib/response");
const app = express();

app.use("/", express.static("static"));

app.get("/api/courses", (req, res) => {
  res.send([1, 5, 5]);
});
app.listen(3000, () => console.log("Listening on port 3000..."));

app.get("/returnTracks", function (req, res) {
  let search = req.query.userTrack;

  res.json(search);
});
