var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var expressValidator = require("express-validator");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("public"));
app.use(expressValidator());

app.get("/index.html", function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

app.get("/getData", function(req, res) {
  res.send(
    "<b>Name: " +
      req.query.name +
      '</b><br><p style="text-decoration: underline">Branch: ' +
      req.query.branch +
      "</p><br>"
  );
});

app.listen(5000);
