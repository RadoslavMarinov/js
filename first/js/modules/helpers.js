function getBufferFromStr(str){
	var buffer = new Buffer((str.length+2) / 5);
	for(var i = 0; i < str.length; i+=5)
	{
		buffer[i/5] = parseInt(str.substring(i, i+5))
		console.log(str.substring(i, i+4))
	}
	return buffer;
}

module.exports = 
{
	getBufferFromStr: getBufferFromStr	
}