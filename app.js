const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Aarish is the best");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});
app.listen(3000, () => console.log("Listening on port 3000..."));
