var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var expressValidator = require("express-validator");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(expressValidator());

app.get("/", function(req, res) {
  res.sendfile(__dirname + "index.html");
});

app.post("/addData", function(req, res) {
  var patt = /1MS1[5-9]CS[0-1][0-9][0-9]/;

  req.checkBody("usn", "field empty").notEmpty();
  req.checkBody("sex", "field empty").notEmpty();
  req.checkBody("sem", "field empty").notEmpty();
  req.checkBody("branch", "field empty").notEmpty();
  req.checkBody("college", "field empty").notEmpty();
  req.checkBody("acard", "field empty").notEmpty();
  req.checkBody("pnum", "field empty").notEmpty();
  req
    .assert("name", "invalid value")
    .notEmpty()
    .isAlpha();
  req.checkBody("accno", "field empty").notEmpty();
  req.assert("usn", "not proper format").matches(patt);
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
