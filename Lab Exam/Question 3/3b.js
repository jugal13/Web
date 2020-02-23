var express=require('express')
var app=express()
var MongoClient=require('mongodb').MongoClient
var body=require('body-parser')
app.use(body.urlencoded({extended:false}))

app.get('/',function(req,res) {
	res.sendFile(__dirname+"/3b.html")
})

app.post('/results',function(req,res) {
	var vote=req.body.par
	MongoClient.connect('mongodb://127.0.0.1:27017/nodedb',function(err,db) {
		if(!err) {
			console.log('Successfully connected to DB')
			var obj={"vote":vote}
			db.collection('election').insertOne(obj,function(err,db) {
				if(!err) {
					console.log("Successfully Inserted")
					res.write("<p>VOTE RECORDED</p><br><br>")
					res.write("<a href='/'>Vote Again</a><br><br>")
					res.write("<a href='/tally'>Show Final Results</a>")
				}
			})
		}
	})
})

app.get('/tally',function(req,res) {
	MongoClient.connect('mongodb://127.0.0.1:27017/nodedb',function(err,db) {
		if(!err) {
			console.log('tally db connected')
			var k=db.collection('election').find()
			res.writeHead(200, {'Content-Type':'text/plain'});
			k.count().then(function(result) {
				res.write('Text to output to browser');
        res.end()
			})
			res.write('Text to output to browser');
      res.end()
		}
	})
})

app.listen(5000)
