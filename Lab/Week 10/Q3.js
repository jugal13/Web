var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var expressValidator = require("express-validator");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(expressValidator());

app.get("/index.html", function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

app.get("/getData", function(req, res) {
  req.checkBody({
    marks: {
      optional: true,
      isNumeric: {
        errorMessage: "Marks must be a number"
      }
    }
  });
  req.checkBody("name", "Name should not be empty").isEmpty();

  var errors = req.validationErrors();
  console.log(req.query);
  console.log(errors);
  if (errors) {
    res.send("Name required");
  } else {
    res.send(
      "<b>Name: " +
        req.query.name +
        '</b><br><p style="text-decoration: underline">Branch: ' +
        req.query.branch +
        "</p><br>" +
        "<p> Marks: " +
        req.query.marks +
        "</p>"
    );
  }
});

app.listen(5000);
