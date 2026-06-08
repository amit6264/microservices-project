const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Admin Running");
});

app.listen(3001, () => {
  console.log("Admin running on 3001");
});
