var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});


app.get('/riko', function(req, res){
   res.send("Hello Riko!");
});

app.listen(3000);