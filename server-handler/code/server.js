var http = require("http")
var url = require("url")
var fs = require("fs")

/*
html/index.html
*/
var i = 0;

var server = http.createServer(function(request, response){
			reqUrl= request.url;
			console.log("Request: " + reqUrl)
			if(reqUrl === "/text"){
				response.writeHead(200, {'Content-Type': 'text/plain'})
				response.write("Riko e super " + (i++))
				response.end();		
			}
			else{
				var fileStr = fs.readFileSync("index.html");
				response.writeHead(200, {'Content-Type': 'text/html'});
				response.write(fileStr);
				response.end();
			}	
			}).listen(80)

console.log('Server running at http://127.0.0.1:80/');