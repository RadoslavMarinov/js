const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use( bodyParser.json() );  
app.use(express.static(__dirname + "/public"))

app.get('/', function(req, res){
	res.sendFile(__dirname + "/public/html/index.html");
});

app.post("/json-data", function(req, res) {
	console.log("Post body: " + JSON.stringify(req.body))
	res.send("Response at json-data request")
})

app.get("*", function(req, res) {
	console.log("Any request" + req);
	res.send("Response ant any request")
})


app.listen(80, () => console.log('Example app listening on port 80!'))