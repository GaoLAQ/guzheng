const port = 3000;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/message", (req, res) => {
  res.json(books);
});

app.post("/message", (req, res) => {
  const book = req.body;
  books.push(book);
  res.send("Book is added to the database");
});

app.put("/message", (req, res) => {
  res.send("put message");
});

app.delete("/message", (req, res) => {
  res.send("delete message");
});

app.listen(port, (req, res) =>
  console.log(`Hello world app listening on port ${port}!`)
);

console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!", books);
