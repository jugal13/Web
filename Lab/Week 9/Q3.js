var express = require("express");
var app = express();

var cur_date = function(req, res, next) {
  var time = new Date(Date.now());
  var time = time.toUTCString();
  var d = new Date(time);
  var offset = (new Date().getTimezoneOffset() / 60) * -1;
  var n = new Date(d.getTime() + offset);
  req.date = n;
  next();
};
app.use(cur_date);

var logger = function(req, res, next) {
  req.cur_url = req.protocol + "://" + req.get("host") + req.originalUrl;
  next();
};
app.use(logger);

app.get("/", function(req, res) {
  var text = "Time: " + req.date + " URL: " + req.cur_url;
  res.end(text);
});

app.listen(5000);
