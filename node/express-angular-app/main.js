const express = require('express')
const app = express()
var bodyParser = require('body-parser')
//== JSDOM
//requeres file system
var fs = require('fs')
var htmlSource = fs.readFileSync("public/html/index.html", "utf8")
var jsdom = require('jsdom');
const {JSDOM} = jsdom;
const dom = new JSDOM(htmlSource);
var q = dom.window.document.querySelector.bind(dom.window.document);
q("title").innerHTML = "FUCKITTT";
q("title").setAttribute('riko-Men', '6')
htmlSource = dom.window.document.querySelector("html").outerHTML
var serialized = dom.serialize()
console.log(serialized)


fs.writeFileSync("public/html/index2.html", '<!DOCTYPE html>\n' + serialized, "utf8");












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

app.listen(8080, () => console.log('Example app listening on port 8080!'))