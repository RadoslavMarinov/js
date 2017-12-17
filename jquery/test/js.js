
var obj = {};

function addObects()
{
	for (var i = 0 ; i < 3; i++) 
	{
		for (var j = 0; j < 5; j++) {
			if(! obj["subObj" + i]){
				obj["subObj" + i] = {};
			}
			obj["subObj" + i]["subSubObj" + j] = i+j;
		}
	}
}

addObects();

console.log(obj);

// { subObj0: { subSubObj0: 0, subSubObj1: 1, subSubObj2: 2, subSubObj3: 3, subSubObj4: 4 },
//   subObj1: { subSubObj0: 1, subSubObj1: 2, subSubObj2: 3, subSubObj3: 4, subSubObj4: 5 },
//   subObj2: { subSubObj0: 2, subSubObj1: 3, subSubObj2: 4, subSubObj3: 5, subSubObj4: 6 } }