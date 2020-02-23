var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var expressValidator = require("express-validator");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public2"));
app.use(expressValidator());
app.get("/", function(req, res) {
  res.sendfile(path.join(__dirname, "/public2/index2.html"));
});

app.post("/addData", function(req, res) {
  var patt = /[0-9]+/;

  req.checkBody("empid", "field empty").notEmpty();
  req.checkBody("department", "field empty").notEmpty();
  req.checkBody("designation", "field empty").notEmpty();
  req.checkBody("phone", "field empty").notEmpty();
  req.checkBody("email", "field empty").notEmpty();
  req.assert("empid", "not proper format").matches(patt);
  var errors = req.validationErrors();
  console.log(errors);
  if (errors) {
    res.status(400).json(errors);
  } else {
    res.status(200).json({ message: "done" });
  }
});

app.listen(3000, function() {
  console.log(3000);
});
