$(document).ready(function() {
	// body...
	var tableInput = "<tr><td><input type='text'/></td><td><input type='text'/></td></tr>";
	var obj = {};
	const rowNo = 2;

	$("h1").text("Helllo Sonq");
	console.log("function called!");

	$("#add").click(function(){
		$("#table").append(tableInput)
	})

	$("#show").click(function(){
		$(":text").each(function(index) {
			console.log( index + ': ' + $(this).val() );
			var rowno = "row" + parseInt(index/rowNo)
			obj[rowno] = new Object()
			obj[rowno]["element" + index.toString()] = $(this).val();
			// obj[rowno]["element" + index.toString()] = $(this).val();
		}) 
	})

	$("#show-object").click(function(){
		console.log(obj);
	})	
})