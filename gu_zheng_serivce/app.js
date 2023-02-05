const port = 3000;
const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectToDb, getDb } = require("./db");
const { ObjectId } = require("mongodb");

// db connection
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + "/public")));

app.get("/message", (req, res) => {
  let messageList = [];
  db.collection("message")
    .find()
    .forEach((msg) => messageList.push(msg))
    .then(() => {
      res.status(200).json(messageList);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch the documents" });
    });
});

app.post("/message", (req, res) => {
  const message = req.body;

  db.collection("message")
    .insertOne(message)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json({ error: "error happen in posting" });
    });
});

app.put("/message", (req, res) => {
  res.send("put message");
});

app.delete("/message/:id", (req, res) => {
  console.log("!!!!!+++", req.params.id);
  db.collection("message")
    .deleteOne({
      _id: ObjectId(req.params.id),
    })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
});

connectToDb((err) => {
  if (!err) {
    app.listen(port, (req, res) =>
      console.log(`Hello world app listening on port ${port}!`)
    );
    db = getDb();
  }
});
