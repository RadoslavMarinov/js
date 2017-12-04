var SerialPort = require("serialport");

SerialPort.list(report);
var port = new SerialPort("COM13", {
  baudRate: 9600,
  parser: SerialPort.parsers.raw
});


port.on('open',function(){
	console.log("COM13 os open!");
	w("Hello Riko!");
});

function w(str)
{
	  port.write(str, function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('message written');
  });
}

port
.on('data', function(Buffer)
{
	console.log(Buffer);
});

function report(err, ports){
console.log(ports);
}