var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

app.get("/getData", function(req, res) {
  res.end("Name:" + req.query.uname + " Age: " + req.query.age);
});

app.listen(5000);
