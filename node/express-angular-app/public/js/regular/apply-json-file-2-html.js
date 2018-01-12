var fs = require('fs')
var jsdom = require('jsdom');
const {JSDOM} = jsdom;



var JsonLoader = function() {
	this.getJsonObj = function() {
		var jsonFile = fs.readFileSync("public/js/regular/html-customizer.JSON", "utf8");
		var jsonObj = JSON.parse(jsonFile);
		return jsonObj;
	}


	this.applyPostObjectToJsonFile = function(obj) {
		var jsonObjExternalObjs = this.getJsonObj();
		var jsonObjInternalObjs = jsonObjExternalObjs.pages.home.objects;
		for(var i = 0; i < jsonObjInternalObjs.length; i++) {
			if( jsonObjInternalObjs[i].id === obj.id ) {
				jsonObjInternalObjs[i].text = obj.text;
				console.log("Object ID: " + obj.id);
				break;
			}
		}
		console.log("JSON to be SAVED IS: "  +  JSON.stringify(jsonObjExternalObjs, null, 2))
		fs.writeFileSync("public/js/regular/html-customizer.JSON", JSON.stringify(jsonObjExternalObjs, null, 2) ,"utf8")
	}
}

module.exports = {
	JsonLoader: JsonLoader,
    firstName: 'James'
}