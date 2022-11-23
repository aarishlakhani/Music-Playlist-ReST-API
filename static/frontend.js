//fetch command for track albums
var trackSearchForm = document.getElementById("tracksForm");
var artistSearchForm = document.getElementById("artistForm");
var albumSearchForm = document.getElementById("albumForm");
var resultsDiv = document.getElementById("resultsDiv");
var playlistAddForm = document.getElementById("playlistForm");

trackSearchForm.addEventListener("submit", function (e) {
  e.preventDefault(); //prevents default ghost clicks

  let userInput = document.getElementById("userTrack").value; //gets user input

  fetch(
    "http://" + window.location.host + "/returnTracks?userTrack=" + userInput,
    {
      method: "GET",
      headers: new Headers({ "Content-Type": "application/json" }),
    }
  )
    .then((res) => res.json())
    .then(function (data) {
      while (resultsDiv.hasChildNodes()) {
        resultsDiv.removeChild(resultsDiv.firstChild);
      }

      for (let i = 0; i < Object.keys(data).length; i++) {
        const paragraph = document.createElement("p");
        paragraph.appendChild(
          document.createTextNode(JSON.stringify(data[i]) + "\n")
        );
        resultsDiv.appendChild(paragraph);
      }

      console.log(JSON.stringify(data, null, 2));
    })
    .catch((err) => console.log(err));
});

artistSearchForm.addEventListener("submit", function (e) {
  e.preventDefault(); //prevents default ghost clicks

  let userInput = document.getElementById("userArtist").value; //gets user input

  fetch(
    "http://" + window.location.host + "/returnArtists?userArtist=" + userInput,
    {
      method: "GET",
      headers: new Headers({ "Content-Type": "application/json" }),
    }
  )
    .then((res) => res.json())
    .then(function (data) {
      const paragraph = document.createElement("p");

      while (resultsDiv.hasChildNodes()) {
        resultsDiv.removeChild(resultsDiv.firstChild);
      }

      for (let i = 0; i < Object.keys(data).length; i++) {
        const paragraph = document.createElement("p");
        paragraph.appendChild(
          document.createTextNode(JSON.stringify(data[i]) + "\n")
        );
        resultsDiv.appendChild(paragraph);
      }

      console.log(data);
    })
    .catch((err) => console.log(err));
});

albumSearchForm.addEventListener("submit", function (e) {
  e.preventDefault(); //prevents default ghost clicks

  let userInput = document.getElementById("userAlbum").value; //gets user input

  fetch(
    "http://" + window.location.host + "/returnAlbum?userAlbum=" + userInput,
    {
      method: "GET",
      headers: new Headers({ "Content-Type": "application/json" }),
    }
  )
    .then((res) => res.json())
    .then(function (data) {
      const paragraph = document.createElement("p");

      while (resultsDiv.hasChildNodes()) {
        resultsDiv.removeChild(resultsDiv.firstChild);
      }

      for (let i = 0; i < Object.keys(data).length; i++) {
        const paragraph = document.createElement("p");
        paragraph.appendChild(
          document.createTextNode(JSON.stringify(data[i]) + "\n")
        );
        resultsDiv.appendChild(paragraph);
      }
      console.log(data);
    })
    .catch((err) => console.log(err));
});
