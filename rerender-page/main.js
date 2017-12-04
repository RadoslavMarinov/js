var http = require('http');
var fs= require('fs');


var htmlHome = "";
var htmlDemo = "";


htmlHome = fs.readFileSync("index.html");
htmlDemo = fs.readFileSync("demo.html");

//console.log(htmlHome.toString());

function onRequest(request, response)
{
	console.log("A user made a request" + request.url);
  if(request.url === "/")
  {
  	response.writeHead(200, {"Context-Type": "text/plain"});
  	response.write(htmlHome);
  	response.end();
  }
  else if(request.url === "/demo.html")
  {
    console.log("DEMO")
    response.writeHead(200, {"Context-Type": "text/plain"});
    response.write(htmlDemo);
    response.end();    
  }
}

http.createServer(onRequest).listen(80);
console.log("Server is running...")

