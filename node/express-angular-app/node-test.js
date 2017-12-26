
var someVar = '';

function someFunction() {
	console.log(someVar)
	someFunction2()
}

someFunction()

function someFunction2() {
	console.log("Some Function 2 has been called")
}

someVar = 'Some Var Displayed Here'