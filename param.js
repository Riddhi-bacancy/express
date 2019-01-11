const express = require('express')
const app = express()

app.put('/message/:id', function(req, res){
  const id = req.params.id
  const cryp = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
  res.send(cryp)
})

app.listen(process.argv[2])