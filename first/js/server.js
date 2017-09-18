var http = require("http");
var fs = require('fs');
const EventEmitter = require('events');
const Serialport = require("serialport")

const Helpers = require('./modules/Helpers.js')

var evEmitter = new EventEmitter();
var server = {};
var serialport = new Serialport('COM22', {
	baudRate: 115200
})

var htmlFile = "";

// Objects Factory
function createObject(frameObject)
{
	return Object.create(frameObject);
}

// Object Definitions
var frame = 
{
	rawStr: "",
	buff: {}
}

var httpResponse = 
{
	currentResponse: {},
	data: ""
}

//Object instantiations
var myFrame = createObject(frame);
var myResponse = createObject(httpResponse);

// File system
fs.readFile('../html/index.html', function(err, data){
	if(err){
		trow.err;
	}
	htmlFile = data;
	evEmitter.emit("htmFileRead")
})

definePortListeners();

//Event Handlers
evEmitter.on("htmFileRead", () => {
	console.log("File Ready!")
	create_server();
})

// Server
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
	myResponse.data = htmlFile;
	if (request.method === 'GET' && request.url === '/') 
	{
		console.log('The GET request is as expected:' + request.url);
		myResponse.data = htmlFile;
		myResponse.currentResponse = response;
	}
	if (request.method === 'POST' && request.url === '/frame') 
	{
		console.log('The POST request is as expected:' + request.data);
		myResponse.data = 'Hello This is the response after the posrt!';
		request.on('data', handleHttpPostData);

	}
	if (request.method === 'POST' && request.url === '/start') 
	{
		console.log('The POST request is as expected:' + request.data);
		myResponse.data = 'Hello This is the response after the posrt!';
		request.on('data', handleHttpPostData);
	}
	
	doResponse(myResponse.currentResponse);
	// setTimeout(doResponse, 2, response);
}

function handleHttpPostData(data)
{
	myFrame.rawStr = data.toString();
	console.log(data.toString());
	myFrame.buff = Helpers.getBufferFromStr(data.toString());
	console.log(myFrame.buff);
	serialport.write(myFrame.buff, function(){
		console.log('Data sent over serialport');
	})
}

function doResponse(response)
{
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(myResponse.data);
	response.end();	
}

// Serial Port Listeners
function definePortListeners()
{
	serialport.on('open', function() {
	    console.log('COM22 is open!');
	});
	
	serialport.on('data', function (data) {
		console.log(data);
	});
}

// function getBufferFromStr(str){
// 	var buffer = new Buffer((str.length+2) / 5);
// 	for(var i = 0; i < str.length; i+=5)
// 	{
// 		buffer[i/5] = parseInt(str.substring(i, i+5))
// 		console.log(str.substring(i, i+4))
// 	}
// 	return buffer;
//}