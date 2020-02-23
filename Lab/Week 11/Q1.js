var express = require("express");
var mongoClient = require("mongodb").MongoClient;
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/showData", function(req, res) {
  mongoClient.connect("mongodb://127.0.0.1/sidharth", function(err, db) {
    if (err) {
      console.log(err);
      db.close();
      res.send("error");
    } else {
      db.collection("data")
        .find({})
        .toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          result.forEach(function(obj) {
            res.write("<p>" + obj.name + "</p>");
          });
          res.end();
          db.close();
        });
    }
  });
});

app.post("/addData", function(req, res) {
  var data = req.body;
  console.log(data);
  mongoClient.connect("mongodb://127.0.0.1/sidharth", function(err, db) {
    if (err) {
      console.log(err);
      db.close();
      res.send("error");
    } else {
      db.collection("data").insert(data, function(err, docs) {
        let obj = req.body;
        res.write("<p>USN:" + obj.usn + "</p>");
        res.write("<p>NAME:" + obj.name + "</p>");
        res.write("<p>SEX:" + obj.sex + "</p>");
        res.write("<p>SEM:" + obj.sem + "</p>");
        res.write("<p>COLLEGE:" + obj.college + "</p>");
        res.write("<p>ADHAAR CARD:" + obj.acard + "</p>");
        res.write("<p>PASSPORT:" + obj.pnum + "</p>");
        res.write("<p>ACCOUNT NUMBER:" + obj.accno + "</p>");
        res.end();
        db.close();
      });
    }
  });
});

var serve = app.listen(3000, function() {
  console.log(3000);
});
