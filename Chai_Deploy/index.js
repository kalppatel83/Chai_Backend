require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("kalppatel83");
});
app.get("/login", (req, res) => {
  res.send("<h1>Please Login at Chai aur code</h1>");
});
app.get("/chai", (req, res) => {
  res.send("<h2>Chai aur Code</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});