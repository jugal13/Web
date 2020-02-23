var express = require("express");
var bodyParser = require("body-parser");
var ejs = require("ejs");
var MongoClient = require("mongodb").MongoClient;
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// Connect to the db

MongoClient.connect("mongodb://127.0.0.1/mydb", function(err, db) {
  if (!err) {
    console.log("We are connected");

    app.use(express.static("public")); //making public directory as static directory
    app.use(bodyParser.json());
    app.get("/", function(req, res) {
      console.log("Got a GET request for the homepage");
      res.send("<h1>Welcome to MSRIT</h1>");
    });
    /*JS client side files has to be placed under a folder by name 'public' */

    app.get("/index.html", function(req, res) {
      res.sendFile(__dirname + "/" + "index.html");
    });

    app.get("/insert.html", function(req, res) {
      res.sendFile(__dirname + "/" + "insert.html");
    });
    /* to access the posted data from client using request body (POST) or request params(GET) */
    //-----------------------POST METHOD-------------------------------------------------
    app.post("/process_post", function(req, res) {
      /* Handling the AngularJS post request*/
      console.log(req.body);
      res.setHeader("Content-Type", "text/html");
      /*response has to be in the form of a JSON*/
      req.body.serverMessage = "NodeJS replying to angular";
      /*adding a new field to send it to the angular Client */
      console.log(
        "Sent data are (POST): Employee ID :" +
          req.body.empid +
          " Employee Name=" +
          req.body.empname
      );
      // Submit to the DB
      var empid = req.body.empid;
      var empname = req.body.empname;
      db.collection("employee").insert({ empid: empid, empname: empname });
      res.end("Employee Inserted-->" + JSON.stringify(req.body));
      /*Sending the respone back to the angular Client */
    });

    //--------------------------GET METHOD-------------------------------
    app.get("/process_get", function(req, res) {
      // Submit to the DB
      var newEmp = req.query;
      var empid = req.query["empid"];
      var empname = req.query["empname"];
      db.collection("employee").insert({ empid: empid, empname: empname });
      console.log(
        "Sent data are (GET): EmpID :" +
          empid +
          " and Employee name :" +
          empname
      );
      res.end("Employee Inserted-->" + JSON.stringify(newEmp));
    });

    //--------------UPDATE------------------------------------------
    app.get("/update.html", function(req, res) {
      res.sendFile(__dirname + "/" + "update.html");
    });

    app.get("/update", function(req, res) {
      var empname1 = req.query.empname;
      //db.collection('employee').update({"empname":empname1},{$set:{"empname":"newemp"}});
      //-----------------------------------------
      db.collection("employee", function(err, data) {
        data.update(
          { empname: empname1 },
          { $set: { empname: "newemp" } },
          { multi: true },
          function(err, result) {
            if (err) {
              console.log("Failed to update data.");
            } else {
              res.send(result);
              console.log("Employee Updated");
            }
          }
        );
      });
    });
    //--------------SEARCH------------------------------------------
    app.get("/search.html", function(req, res) {
      res.sendFile(__dirname + "/" + "search.html");
    });

    app.get("/search", function(req, res) {
      //var empidnum=parseInt(req.query.empid)  // if empid is an integer
      var empidnum = req.query.empid;
      db.collection("employee")
        .find({ empid: empidnum })
        .toArray(function(err, docs) {
          if (err) {
            console.log(err.message + "Failed to get data.");
          } else {
            res.status(200).json(docs);
          }
        });
    });
    // --------------To find "Single Document"-------------------
    /*var empidnum=parseInt(req.query.empid)
    db.collection('employee').find({'empid':empidnum}).nextObject(function(err, doc) {
    if (err) {
      console.log(err.message+ "Failed to get data");
    } else {
      res.status(200).json(doc);
    }
  })
}); */

    //--------------DELETE------------------------------------------
    app.get("/delete.html", function(req, res) {
      res.sendFile(__dirname + "/" + "delete.html");
    });

    app.get("/delete", function(req, res) {
      //var empidnum=parseInt(req.query.empid)  // if empid is an integer
      var empidnum = req.query.empid;
      db.collection("employee", function(err, data) {
        data.remove({ empid: empidnum }, function(err, result) {
          if (err) {
            console.log("Failed to remove data.");
          } else {
            res.send(result);
            console.log("Employee Deleted");
          }
        });
      });
    });
    app.get("/display", function(req, res) {
      //-----DISPLAY IN JSON FORMAT  -------------------------
      /*db.collection('employee').find({}).toArray(function(err, docs) {
    if (err) {
      console.log("Failed to get data.");
    } else 
	{
		res.status(200).json(docs);
    }
  });*/
      //-------------DISPLAY USING EMBEDDED JS -----------
      db.collection("employee")
        .find()
        .sort({ empid: 1 })
        .toArray(function(err, i) {
          if (err) return console.log(err);
          res.render("disp.ejs", { employees: i });
        });
      //---------------------// sort({empid:-1}) for descending order -----------//
    });
    app.get("/about", function(req, res) {
      console.log("Got a GET request for /about");
      res.send("MSRIT, Dept. of CSE");
    });

    var server = app.listen(5000, function() {
      var host = server.address().address;
      var port = server.address().port;
      console.log("Example app listening at http://%s:%s", host, port);
    });
  } else {
    db.close();
  }
});
