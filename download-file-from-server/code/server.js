var http = require("http")
var express = require("express")
var url = require("url")
var fs = require("fs")

var app = express();

app.get('/', function(req, res) {
	console.log(req.url);
	res.sendFile( __dirname + "/index.html");
})

app.get('/index1.html', function(req, res){
	console.log(req.url);
	res.send("Riko");
	//res.sendFile( __dirname + "/index1.html");	
});


app.get('/index1.html-download', function(req, res){
	console.log(req.url);
	res.download(__dirname + '/download.txt', 'download.txt', function(err){
  		if (err) {
  			console.log(err);
  		} 
  		else {
    		console.log("File send without errors!");
  		}
	});
});


app.listen(80, function(){
	console.log('Server running at http://127.0.0.1:80/');
});