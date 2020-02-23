var express=require('express')
var app=express()

var count=0;
function logger(req,res,next) { 
	console.log("Logged in")
	count++
	next()
}

app.use(logger)

var visit=function(req,res,next) {
	res.visit=count
	console.log("visited : "+count)
	next()
}

app.use(visit)

app.get('/',function(req,res) {
	res.send("<h3>Visited : "+res.visit+"</h3>")
})

app.listen(5000)