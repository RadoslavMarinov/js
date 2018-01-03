const express = require('express')
const app = express()
var bodyParser = require('body-parser')
//== JSDOM
//requeres file system
var fs = require('fs')
var htmlSource = fs.readFileSync("dist/html/index.html", "utf8")


// Set upt JSDOM HTML JQUERY-parser
var jsdom = require('jsdom');
const {JSDOM} = jsdom;
const dom = new JSDOM(htmlSource);
var q = dom.window.document.querySelector.bind(dom.window.document);
// q("title").innerHTML = "FUCKITTT";
// q("title").setAttribute('riko-Men', '6')


//Extract and parse JSON customizer file
var jsonSource;
var htmlCust;
var jsonFileObj
function setHtmlFormJson(){
	jsonSource = fs.readFileSync("public/js/regular/html-customizer.JSON", "utf8")
	htmlCust = JSON.parse(jsonSource);
	jsonFileObj = htmlCust.pages.home.objects;
	for (var i = 0; i < jsonFileObj.length; i++) {
		console.log(jsonFileObj[i]);
		q("#" + jsonFileObj[i].id).innerHTML = jsonFileObj[i].text
	}
	var serialized = dom.serialize()
	console.log(serialized)
	fs.writeFileSync("dist/html/index.html", serialized, "utf8");
}













app.use( bodyParser.json() );  
app.use(express.static(__dirname + "/dist"))

app.get('/', function(req, res){
	setHtmlFormJson();
	console.log("Request URL: root"  + req.url)
	res.sendFile(__dirname + "/dist/html/index.html");
});

app.post("/html-params.json", function(req, res) {
	var obj = req.body;


	for(var i = 0; i < jsonFileObj.length; i++) {
		if( jsonFileObj[i].id === obj.id ) {
			jsonFileObj[i].text = obj.name;
			console.log("Object ID: " + obj.id);
			break;
		}
	}

	fs.writeFileSync("public/js/regular/html-customizer.JSON", JSON.stringify(htmlCust, null, 2) ,"utf8")
	console.log("Request URL: " + req.url + ",   " + "Request body: " + JSON.stringify(req.body) );
	res.send("Post Accepted!")
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))