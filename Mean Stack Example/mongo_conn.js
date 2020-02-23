var MongoClient = require('mongodb').MongoClient;
// Connect to the db
MongoClient.connect("mongodb://127.0.0.1/mydb", function(err, db) {
if(!err) {
    console.log("We are connected");
}
else
	db.close()
});
