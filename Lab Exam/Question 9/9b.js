var express=require('express')
var app=express()
var MongoClient=require('mongodb').MongoClient

MongoClient.connect('mongodb://127.0.0.1:27017/nodedb',function(err,db) {
	if(!err) {
		console.log('Connected to DB')
		app.get('/',function(req,res) {
			res.sendFile(__dirname+'/9b.html')
		})
		app.listen(5000)
		app.get('/data',function(req,res) {
			var obj={"username":req.query.uname,"branch":req.query.branch,"sem":req.query.sem}
			db.collection('student_9b').insertOne(obj,function(err,db) {
				if(!err) {
					console.log('Document Inserted')
					res.end("<p>Document Successfully Inserted</p><br><a href='/'>Insert</a><br><a href='display'>Display</a>")
				}
			})
		})

		app.get('/display',function(req,res) {
			console.log('Display')
			var cur=db.collection('student_9b').find({$and:[{"branch":"CSE"},{"sem":"6"}]})
			res.write('<h1>6th Sem CSE students</h1>')
			cur.each(function(err,item) {
				if(item!=null) {
					res.write("Username : "+item.username+"<br>")
					res.write("Branch : "+item.branch+"<br>")
					res.write("Sem : "+item.sem+"<br><br>")
				}
			})
		})
	}
})