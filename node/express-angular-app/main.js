const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.use( bodyParser.json() );  
app.use(express.static(__dirname + "/dist"))

app.get('/', function(req, res){
	console.log("Request URL: "  + req.url)
	res.sendFile(__dirname + "/dist/html/index.html");
});

app.post("/html-params.json", function(req, res) {
	console.log("Request URL: " + req.url + ",   " + "Request body: " + JSON.stringify(req.body) );
	res.send("Post Accepted!")
})

app.listen(80, () => console.log('Example app listening on port 80!'))