var express=require('express')
var app=express()
var MongoClient=require('mongodb').MongoClient

MongoClient.connect("mongodb://127.0.0.1:27017/nodedb",function(err,db) {
	if(!err) {
		console.log("Connected to DB")
		app.get('/',function(req,res) {
			res.sendFile(__dirname+'/8b.html')
		})

		app.get('/data',function(req,res) {
			var obj={"usn":req.query.usn,"name":req.query.name,"company":req.query.comp}
			db.collection('student_8b').insertOne(obj,function(err,db) {
				if(!err) {
				console.log("Document successfull Inserted")
				}
			})
			res.end("<p>Document Successfully Inserted</p><br><a href='/'>Insert</a><br><a href='display'>Display</a>")
		})

		app.get('/display',function(req,res) {
			var cur=db.collection('student_8b').find({"company":"infosys"})
			res.write('<h1>Infosys selected students</h1>')
			cur.each(function(err,item) {
				if(item!=null) {
					res.write("Name : "+item.name+"<br>")
					res.write("USN : "+item.usn+"<br>")
					res.write("Company : "+item.company+"<br><br>")
				}
			})
		})
		app.listen(5000)
	}
})
