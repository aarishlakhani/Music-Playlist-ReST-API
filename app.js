//setting up the express server documention
const express = require("express");
const res = require("express/lib/response");
const app = express();

const csv = require("csv-parser");
const fs = require("fs");

app.use("/", express.static("static"));

app.get("/api/courses", (req, res) => {
  res.send([1, 5, 5]);
});
app.listen(3000, () => console.log("Listening on port 3000..."));

//csv parser
const allGenres = [];
const allAlbums = [];
const allArtists = [];
const allTracks = [];

fs.createReadStream("lab3-data/genres.csv")
  .pipe(csv({}))
  .on("data", (data) => allGenres.push(data));

fs.createReadStream("lab3-data/raw_albums.csv")
  .pipe(csv({}))
  .on("data", (data) => allAlbums.push(data));

fs.createReadStream("lab3-data/raw_artists.csv")
  .pipe(csv({}))
  .on("data", (data) => allArtists.push(data));

fs.createReadStream("lab3-data/raw_tracks.csv")
  .pipe(csv({}))
  .on("data", (data) => allTracks.push(data));

//search function for tracks
app.get("/returnTracks", function (req, res) {
  let search = req.query.userTrack;

  let resultArray = allTracks.filter((track) =>
    track.track_title.toString().toLowerCase().includes(search.toLowerCase())
  );

  res.json(resultArray);
});

//search function for artist name
app.get("/returnArtists", function (req, res) {
  let search = req.query.userArtist;

  let resultArray = allArtists.filter((artist) =>
    artist.artist_name.toString().toLowerCase().includes(search.toLowerCase())
  );

  res.json(resultArray);
});

//search function for album name
app.get("/returnAlbum", function (req, res) {
  let search = req.query.userAlbum;

  let resultArray = allTracks.filter((tracks) =>
    tracks.album_title.toString().toLowerCase().includes(search.toLowerCase())
  );

  res.json(resultArray);
});
