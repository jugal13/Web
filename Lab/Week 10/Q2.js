var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/" + "entry.html");
});

app.get("/rit", function(req, res) {
  res.sendFile(__dirname + "/" + "c1.html");
});

app.get("/pes", function(req, res) {
  res.sendFile(__dirname + "/" + "c2.html");
});

app.get("/bms", function(req, res) {
  res.sendFile(__dirname + "/" + "c3.html");
});

app.get("/rvce", function(req, res) {
  res.sendFile(__dirname + "/" + "c4.html");
});

app.get("/bit", function(req, res) {
  res.sendFile(__dirname + "/" + "c5.html");
});

app.listen(5000);
