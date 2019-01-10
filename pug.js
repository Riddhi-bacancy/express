var express = require('express')
var pug = require('pug')
var path = require('path')
var app = express()
app.set('views',path.join(__dirname, 'templates'))
app.set('view engine', 'pug')
app.use('/',function(req,res){
	res.render('pug1', {date: new Date().toDateString()})
})

app.listen(8585)
