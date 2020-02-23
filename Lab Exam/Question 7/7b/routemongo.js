var express=require('express')
var app=express()
var body=require('body-parser')
var MongoClient=require('mongodb').MongoClient
app.use(body.urlencoded({extended:false}))
app.use(body.json())

MongoClient.connect('mongodb://127.0.0.1:27017/nodedb',function(err,db)
{
	if(!err)
	{
		app.use(express.static('public'))
		console.log('successfully Connected to db')
		app.get('/',function(req,res)
		{
			res.sendFile(__dirname+'/public/index.html')
		})
		app.get('/insert',function(req,res)
		{
			res.sendFile(__dirname+'/public/insert.html')
		})
		app.listen(5000)
		app.post('/process_post',function(req,res)
		{
			console.log(req.body)
			res.setHeader('Content-Type', 'text/html')
			console.log('Inside process')
			var obj={'name':req.body.stuname,'usn':req.body.stuusn,'grade':req.body.grade}
			db.collection('student_7b').insertOne(obj,function(req,res)
			{
				console.log('successfully Inserted')
			})
			res.end('successful insertion -->'+JSON.stringify(req.body))
		})
		app.get('/display',function(req,res)
		{
			db.collection('student_7b').find().toArray(function(err,i)
			{
				if(!err)
				{
					res.render('disp.ejs',{students:i})
				}
			})
		})
	}
})
