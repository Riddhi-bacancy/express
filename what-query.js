var express = require('express')
var app = express()
app.get('/search',function(req,res){
   const query = req.query
   res.send(query)
}).listen(process.argv[2])