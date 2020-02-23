var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var app = express();

var schema = new mongoose.Schema(
  {
    empid: "string",
    empname: "string",
    department: "string",
    designation: "string",
    phone: "string",
    email: "string"
  },
  {
    strict: false,
    collection: "emp1"
  }
);
var Emp = mongoose.model("emps", schema);

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index2.html");
});

app.post("/addData", function(req, res) {
  var data = req.body;
  mongoose.connect(
    "mongodb://127.0.0.1/sidharth",
    { useNewUrlParser: true },
    function(err, db) {
      if (err) {
        res.status(400).send("some db error");
      } else {
        var addition = new Emp(data);
        addition.save(function(err) {
          if (err) {
            console.log(err);
            db.close();
          } else {
            db.close();
            res.status(200).send("added sucessfully");
          }
        });
      }
    }
  );
});
app.get("/viewAll", function(req, res) {
  mongoose.connect(
    "mongodb://127.0.0.1/sidharth",
    { useNewUrlParser: true },
    function(err, db) {
      if (err) {
        res.status(400).send("some db error");
      } else {
        Emp.find({}).exec(function(err, obj) {
          obj.forEach(obj => {
            if (obj["empid"]) {
              res.write(
                "<p>EMPID:" +
                  obj["empid"] +
                  "</p><p>NAME:" +
                  obj["empname"] +
                  "</p><p>DEPARTMENt:" +
                  obj["department"] +
                  "</p><p>DESIGNATION:" +
                  obj["designation"] +
                  "</p><p>Phone:" +
                  obj["phone"] +
                  "</p><p>EMAIL:" +
                  obj["email"] +
                  "</p>"
              );
            }
          });
          res.end();
        });
      }
    }
  );
});

app.get("/sort", function(req, res) {
  mongoose.connect(
    "mongodb://127.0.0.1/sidharth",
    { useNewUrlParser: true },
    function(err, db) {
      if (err) {
        res.status(400).send("some db error");
      } else {
        Emp.aggregate(
          [
            {
              $group: {
                _id: "$empid",
                recommendCount: { $sum: 1 }
              }
            },
            { $sort: { _id: -1 } }
          ],
          function(err, result) {
            if (!err) {
              result.forEach(obj1 => {
                Emp.find({ empid: obj1._id }).exec(function(err, obj) {
                  res.write(
                    "<p>EMPID:" +
                      obj["empid"] +
                      "</p><p>NAME:" +
                      obj["empname"] +
                      "</p><p>DEPARTMENt:" +
                      obj["department"] +
                      "</p><p>DESIGNATION:" +
                      obj["designation"] +
                      "</p><p>Phone:" +
                      obj["phone"] +
                      "</p><p>EMAIL:" +
                      obj["email"] +
                      "</p>"
                  );
                });
              });
            } else {
              console.log(err);
            }
          }
        );
      }
    }
  );
});

app.listen(3000, function() {
  console.log(3000);
});
