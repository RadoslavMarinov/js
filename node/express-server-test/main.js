const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
const fs = require("fs")

//==
const tableDataPath = "data/table-data.json";
//==
app.use( bodyParser.json() );  
app.use(express.static(__dirname + "/public"))
//==
app.get('/', function(req, res){
	res.sendFile(__dirname + "/public/html/index.html");
});
//== 
app.get("/data-json", function(req, res) {
	console.log("Request Get Json Data: " + JSON.stringify(req.url))
	var dataFile = fs.readFileSync(tableDataPath, "utf8");
	console.log(dataFile);
	res.send(dataFile);
} )
//==
app.post("/json-data", function(req, res) {
	reqBody = JSON.stringify(req.body, undefined, 2);
	console.log("Post body: " + reqBody)
	if(fs.existsSync(tableDataPath)){
		fs.unlinkSync(tableDataPath);
	}
	fs.writeFileSync(tableDataPath, reqBody);	
	res.send("Response at json-data request")
})
//==
app.get("/new-html", function(req, res){
	console.log("Request /new-html");
	res.sendFile(__dirname + "/public/html/new.html");
})
//==
app.get("*", function(req, res) {
	console.log("Any request" + req.url);
	res.send("Response ant any request")
})
//==
app.listen(80, () => console.log('Example app listening on port 80!'))