var express = require('express')
var body = require('body-parser')
var app = express()
app.use(body.urlencoded({extended:false}))
app.post('/form',function(request,response){
	response.end(request.body.str.split('').reverse().join(''));
}).listen(Number(process.argv[2]));