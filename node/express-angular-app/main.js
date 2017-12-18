const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.use( bodyParser.json() );  
app.use(express.static(__dirname + "/public"))

app.get('/', function(req, res){
	console.log("Request URL: "  + req.url)
	res.sendFile(__dirname + "/public/html/index.html");
});

app.get("/json-data", function(req, res) {
	console.log("Json Data requested - " + req.get('host') + req.url)
	res.send("Response at json-data request")
})

// app.get("*", function(req, res) {
// 	console.log("Any request" + req.url);
// 	res.send("Response ant any request")
// })


app.listen(80, () => console.log('Example app listening on port 80!'))