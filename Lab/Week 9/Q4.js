var express = require("express");
var app = express();
var count = 0;
var myLogger = function(req, res, next) {
  req.count = count++;
  console.log("LOGGED");
  next();
};
app.use(myLogger);

var visited = function(req, res, next) {
  console.log("No. of the time visited: " + req.count);
  next();
};
app.use(visited);

app.get("/", function(req, res) {
  res.send("Welcome user");
});

app.listen(5000);
