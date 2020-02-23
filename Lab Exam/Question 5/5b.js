var express=require('express')
var app=express()
var MongoClient=require('mongodb').MongoClient

app.get('/',function(req,res) {
	res.sendFile(__dirname+'/5b.html')
})

app.get('/data',function(req,res) {
	var obj={"name":req.query.name,"usn":req.query.usn}
	MongoClient.connect("mongodb://127.0.0.1:27017/nodedb",function(err,db) {
		if(!err) {
			console.log('Connected to db')
			db.collection('b5').insertOne(obj,function(err,db) {
				if(!err) {
					res.end("<p>Successful insertion</p><br><a href='/'>Insert</a><br><a href='/update'>Update Data</a>")
				}
			})
		}
	})
})

app.get('/update',function(req,res) {
	res.sendFile(__dirname+'/5b_update.html')
})

app.get('/results',function(req,res) {
	MongoClient.connect("mongodb://127.0.0.1:27017/nodedb",function(err,db) {
		if(!err) {
			db.collection('b5').updateOne({"name":req.query.name},{$set:{"usn":req.query.usn}},function(err,db) {
				if(!err) {
					console.log('Successful Update')
				}
			})
			var cur=db.collection('b5').find()
			res.write("<h1>Display DB</h1>")
			cur.each(function(err,item) {
				if(item!=null) {
					res.write(item.name)
					res.write("<br>")
					res.write(item.usn)
					res.write("<br><br>")
				}
			})
		}
	})
})

app.listen(5000)