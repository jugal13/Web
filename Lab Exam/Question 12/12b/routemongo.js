var express=require('express')
var app=express()
var body=require('body-parser')
app.use(body.urlencoded({extended:false}))
app.use(body.json())
app.use(express.static('public'))
var MongoClient=require('mongodb').MongoClient

MongoClient.connect("mongodb://127.0.0.1:27017/nodedb",function(err,db)
{
	if(!err)
	{
		console.log('Connected to DB')
		app.get('/',function(req,res)
		{
			res.sendFile(__dirname+'/public/index.html')
		})

		app.get('/insert',function(req,res)
		{
			res.sendFile(__dirname+'/public/insert.html')
		})

		app.post('/process_post',function(req,res)
		{
			console.log('Working')
			obj={"usn":req.body.usn,"name":req.body.name,"marks":parseInt(req.body.marks)}
			db.collection('student_12b').insertOne(obj,function(err,db)
			{
				if(!err)
				{
					console.log('Document added successfully')
					res.send('Document added ---> '+JSON.stringify(req.body))
				}
			})
		})

		app.get('/display',function(req,res)
		{
			db.collection('student_12b').find({"marks":{$lt:20}}).toArray(function(err,i)
			{
				if(!err)
				{
					res.render("disp.ejs",{students:i})
				}
			})

		})

		app.listen(5000)
	}
})