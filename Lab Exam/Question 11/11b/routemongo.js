var express=require('express')
var app=express()
var body=require('body-parser')
var MongoClient=require('mongodb').MongoClient
app.use(body.urlencoded({extended:false}))
app.use(body.json())
app.use(express.static('public'))
MongoClient.connect("mongodb://127.0.0.1:27017/nodedb",function(err,db)
{
	if(!err)
	{
		console.log('COnnected to db')
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
			console.log('Processing post request')
			var obj={"usn":req.body.usn,"name":req.body.name,"attendence":parseInt(req.body.attendence)}
			db.collection('student_11b').insertOne(obj,function(err,db)
			{
				if(!err)
				{
					console.log('Document inserted')
				}
			})

			res.end("Document inserted into attendence db -->"+JSON.stringify(req.body))
		})

		app.get('/display',function(req,res)
		{
			db.collection('student_11b').find({"attendence":{$lt:75}}).toArray(function(err,i)
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
