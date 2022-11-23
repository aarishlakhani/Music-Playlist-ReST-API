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

  let resultJSON = [];
  let size = 0;

  if (resultArray.length < 25) {
    size = resultArray.length;
  } else {
    size = 25;
  }

  for (var i = 0; i < size; i++) {
    let varJSON = {};
    varJSON.track_id = resultArray[i].track_id;
    varJSON.track_title = resultArray[i].track_title;
    varJSON.album_id = resultArray[i].album_id;
    varJSON.album_title = resultArray[i].album_title;
    varJSON.artist_id = resultArray[i].artist_id;
    varJSON.artist_name = resultArray[i].artist_name;
    varJSON.tags = resultArray[i].tags;
    varJSON.track_date_created = resultArray[i].track_date_created;
    varJSON.track_date_recorded = resultArray[i].track_date_recorded;
    varJSON.track_duration = resultArray[i].track_duration;
    varJSON.track_genres = resultArray[i].track_genres;
    varJSON.track_number = resultArray[i].track_number;
    resultJSON.push(varJSON);
  }

  res.send(resultJSON);
});

//search function for artist name
app.get("/returnArtists", function (req, res) {
  let search = req.query.userArtist;

  let resultArray = allArtists.filter((artist) =>
    artist.artist_name.toString().toLowerCase().includes(search.toLowerCase())
  );

  let resultJSON = [];
  let size = 0;

  if (resultArray.length < 25) {
    size = resultArray.length;
  } else {
    size = 25;
  }

  for (let i = 0; i < size; i++) {
    let varJSON = {};
    varJSON.artist_name = resultArray[i].artist_name;
    varJSON.artist_id = resultArray[i].artist_id;
    varJSON.artist_date_created = resultArray[i].artist_date_created;
    varJSON.artist_location = resultArray[i].artist_location;
    varJSON.artist_active_year_begin = resultArray[i].artist_active_year_begin;
    varJSON.artist_favorites = resultArray[i].artist_favorites;
    resultJSON.push(varJSON);
  }

  res.send(resultJSON);
});

//search function for album name
app.get("/returnAlbum", function (req, res) {
  let search = req.query.userAlbum;

  let resultArray = allTracks.filter((tracks) =>
    tracks.album_title.toString().toLowerCase().includes(search.toLowerCase())
  );

  let resultJSON = [];
  let size = 0;

  if (resultArray.length < 25) {
    size = resultArray.length;
  } else {
    size = 25;
  }

  for (let i = 0; i < size; i++) {
    let varJSON = {};
    varJSON.track_id = resultArray[i].track_id;
    varJSON.track_title = resultArray[i].track_title;
    varJSON.album_id = resultArray[i].album_id;
    varJSON.album_title = resultArray[i].album_title;
    varJSON.artist_id = resultArray[i].artist_id;
    varJSON.artist_name = resultArray[i].artist_name;
    varJSON.tags = resultArray[i].tags;
    varJSON.track_date_created = resultArray[i].track_date_created;
    varJSON.track_date_recorded = resultArray[i].track_date_recorded;
    varJSON.track_duration = resultArray[i].track_duration;
    varJSON.track_genres = resultArray[i].track_genres;
    varJSON.track_number = resultArray[i].track_number;
    resultJSON.push(varJSON);
  }

  res.send(resultJSON);
});
