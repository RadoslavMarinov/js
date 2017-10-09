var http = require("http")
var express = require("express")
var url = require("url")
var fs = require("fs")

var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.text());

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.post('/', function(request, response){
	var postObj = JSON.parse(request.body);
	// postObj = JSON.parse(request.body)
  	console.log(postObj);      // your JSON
});

app.listen(80);
console.log('Server is listening ... ')