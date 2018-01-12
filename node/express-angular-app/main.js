const express = require('express')
const app = express()
var applJsonToHtml = require('./public/js/regular/apply-json-file-2-html.js')
var bodyParser = require('body-parser')

app.use( bodyParser.json() );  
app.use(express.static(__dirname + "/dist"))

var jsonLoader = new applJsonToHtml.JsonLoader();

app.get('/', function(req, res){
	console.log("Request URL: root"  + req.url)
	res.sendFile(__dirname + "/dist/html/index.html");
});

app.get('/json', function(req, res){
	console.log("Request URL: root"  + req.url)
	res.json(JSON.stringify(jsonLoader.getJsonObj()));
})

app.post("/html-params.json", function(req, res) {
	var obj = req.body;
	jsonLoader.applyPostObjectToJsonFile(obj);
	console.log("Request URL: " + req.url + ",   " + "Request body: " + JSON.stringify(req.body) );
	res.send("Post Accepted!")
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))