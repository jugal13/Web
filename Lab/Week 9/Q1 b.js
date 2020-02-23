var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/" + "indexpost.html");
});

app.post("/getData", function(req, res) {
  res.end("Name: " + req.body.uname + " Age: " + req.body.age);
});

app.listen(5000);
