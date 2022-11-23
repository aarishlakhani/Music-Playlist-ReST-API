var trackSearchForm = document.getElementById("tracksForm");

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
      console.log("it works" + userInput);
    })
    .catch((err) => console.log(err));
});
