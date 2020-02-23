var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/1b.html')
})

app.get('/data', function (req, res) {
  var usn = req.query.usn
  var name = req.query.name
  var subcode = req.query.subcode
  var cie = parseInt(req.query.marks)
  var obj = { "usn": usn, "name": name, "subcode": subcode, "cie": cie };
  MongoClient.connect('mongodb://127.0.0.1:27017/nodedb', function (err, db) {
    if (!err) {
      db.collection('student').insertOne(obj, function (err, db) {
        if (!err) {
          console.log("Successful document insertion")
          res.end("<a href='/'>Insert More data</a><br><br><a href='/show'>Show Students with CIE less than 20</a>")
        }
        else {
          console.log("Unsucessful!")
          db.close()
        }
      })
    }
    else {
      console.log("Could'nt connect to db")
      db.close()
    }
  })
})

app.get('/show', function (req, res) {
  MongoClient.connect('mongodb://127.0.0.1:27017/nodedb', function (err, db) {
    if (!err) {
      console.log("Mongo successfully connected in show")
      var disp = db.collection('student').find({ "cie": { $lt: 20 } })
      res.write("<h1>Students below 20 in CIE</h1>")
      disp.each(function (err, item) {
        if (item != null) {
          res.write("<p>USN : " + item.usn + "</p>")
          res.write("<p>Name : " + item.name + "</p>")
          res.write("<p>Subject Code : " + item.subcode + "</p>")
          res.write("<p>CIE Marks : " + item.cie + "</p>")
          res.write("<br><br>")
        }
      })
    }
  })
})
app.listen(5000)