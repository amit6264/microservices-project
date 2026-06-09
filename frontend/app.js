const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Frontend Service Running AWS Ec2 instance");
});

app.listen(3000, () => {
  console.log("Frontend running on 3000");
});



function add(a, b) {
  return a + b;
}

function addNumbers(a, b) {
  return a + b;
}

function sum(a, b) {
  return a + b;
}
