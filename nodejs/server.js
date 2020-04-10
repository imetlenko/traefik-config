var express = require('express');
var app = express();

// var db = require('mongoose');
// db.connect("mongodb://mongo:27017");

app.get('/node', function(req, res){
  res.send("Hello World!<br>\nHola Mundo!<br>\n");
});

app.listen(9000, function(){
  console.log('Node app listening on port 9000!');
});
