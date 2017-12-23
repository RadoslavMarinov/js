
$(document).ready(function() {
	
	var tableRow = "<tr><td><input type='text'/></td><td><input type='text'/></td></tr>"
	var obj = {};
	const ROWNO = 2;

	$("body").append("<p>This is a paragraph</p>");

	$("#create-element").click(function() {
		$("table").append(tableRow);
	});

	$("#show-object").click(function() {
		$("input").each(function(index) {
			var rowno = parseInt(index / ROWNO);
			var columnno = (index % 2); 
			if(! obj["Row"+rowno]) {
				obj["Row"+rowno] = {};
			}

			switch(columnno) {
				case 0:
					obj["Row"+rowno]["Name"] = $(this).val()		
					break;
				case 1:
					obj["Row"+rowno]["Age"] = $(this).val()		
					break;
			}
		})
		$("p").text(JSON.stringify(obj, undefined, 5));
		console.log(JSON.stringify(obj, undefined, 5))	
	})

<<<<<<< HEAD
	$("#request-json").click(function() {
		$.get("/json-data", {json_data: "JSON Data String"}, function( data ) {
  			$( "p" ).html( data );
  			alert( "Load was performed." );
		}, "json");
=======
	$("#post-json-data").click(function() {
		 $.ajax({
		   url: "/json-data",
		   type: 'POST',
		   contentType:'application/json',
		   data: JSON.stringify(obj),
		   success: function(data){
		     	//On ajax success do this
		     	console.log("Success: " + data);
		      },
		   error: function(xhr, ajaxOptions, thrownError) {
		      //On error do this
		        if (xhr.status == 200) {

		            alert(ajaxOptions);
		        }
		        else {
		            alert(xhr.status);
		            alert(thrownError);
		        }
		    }
		 });
>>>>>>> 656ebad95e3b649484f563d9f0f290437c639571
	})

	$("#get-json-data").click(function() {
		$.get("/data-json", function( data ) {
  			$( "p" ).html( data );
		});
		console.log("Request to server made, url: /data-json")
	})
	
})

