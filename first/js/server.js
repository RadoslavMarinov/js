var http = require("http");
var fs = require('fs');
const EventEmitter = require('events');

var evEmitter = new EventEmitter();
var server = {};

var htmlFile = "";


fs.readFile('../html/index.html', function(err, data){
	if(err){
		trow.err;
	}
	htmlFile = data;
	evEmitter.emit("htmFileRead")
})

evEmitter.on("htmFileRead", () => {
	console.log("File Ready!")
	create_server();
})

function create_server()
{
	server = http.createServer();
	server.listen(80);
	console.log("Server is listening !!!");
	server.on('request', handleRequestCB );
}

function handleRequestCB(request, response)
{
	console.log(request.url);
	if (request.method === 'GET' && request.url === '/riko') 
	{
		console.log('The GET request is as expected:' + request.url);
	}
	if (request.method === 'POST' && request.url === '/riko') 
	{
		console.log('The POST request is as expected:' + request.data);
		request.on('data', function(data){console.log(data);})
	}
	setTimeout(()=>{doResponse(response);}, 2000);
}

function doResponse(response)
{
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(htmlFile);
	response.end();	
}