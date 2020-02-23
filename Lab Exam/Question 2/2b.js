var express = require('express');
var expressValidator = require('express-validator');
var body = require('body-parser');
var app = express();
app.use(expressValidator());
app.use(body.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/2b.html")
})

app.post('/data', function (req, res) {
  req.checkBody('name', 'Empty String').notEmpty();
  var errors = req.validationErrors();
  if (errors) {
    res.send(errors);
  }
  else {
    res.send("NO ERRORS")
  }
  res.send("responses")
})

app.listen(5000)