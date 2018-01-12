/* public/js/css-objects ******************************************/
buttonGreen = {
	'background-color': 'lightgreen',
	'width': '100px',
	'height': '50px',
	'font-size': '20px'  
}  

buttonRed = {
	'background-color': '#FF1010',
	'width': '100px',
	'height': '50px',
	'font-size': '20px'
}

/* public/js/front-end ********************************************/

//== Updates button styles
var updateStyles = function($scope) {

	if($scope.ButtonStatus == "OFF")
	{
		$scope.myStyle = buttonGreen;	
	}
	else
	{
		$scope.myStyle = buttonRed;
	}
}

/* When the document is loaded, request
   is made in order to obtain the initial
   values for the the elements. Those values
   are stored in a special JSON file on the 
   server, currently named 
   "html-customizer.JSON"
*/
$( document ).ready( function() {
	$.get( "/json", function( data ) {
		var responseObject = JSON.parse(data)
		var domObjects = responseObject.pages.home.objects;
		
		//== Div #button-1-div
		var buttOneDivDomElement = document.querySelector('#button-1-div');
		var $scope = angular.element(buttOneDivDomElement).scope();
		$scope.$apply(function(){
			$scope.spanText = domObjects[0].text;
			$scope.ButtonStatus = domObjects[1].text;
			updateStyles($scope);
		})

		//== Div #button-2-div
		var buttTwoDivDomElement = document.querySelector('#button-2-div');
		var $scope = angular.element(buttTwoDivDomElement).scope();
		$scope.$apply(function(){
			$scope.spanText = domObjects[2].text;
			$scope.ButtonStatus = domObjects[3].text;
			updateStyles($scope);	
		})
	});
})

/* public/js/controllers/apps *************************************/
angular.module("myApp", []); 

angular.module("myApp").controller("postController", function($scope, $http) {
	$scope.buttonName = "Post";

	// Post params configurations
	$scope.post = function() {
		var url = "/html-params.json";
		var postData = 	{
							name: "Riko"
						};
		var congig = 	{
							headers: {
								'Content-Type': 'application/json'
							}
						};
		$http.get("/json").then(
			function(res) { //Success
				console.log(res.data)
			},
		)
	}
})
/* Toggle-colors.js ************************************************/ 
angular.module("myApp").controller("myController", function($scope, $compile, $element, $http,  $window, $attrs) {
	// $scope.inputValue = "Button"
	$scope.myStyle = buttonGreen  //{'background-color':'#00FF00', 'font-size': '24px', 'width': '80px'}
	
	//== Apply stiles according to the button status

	//==
	$scope.toggleRelay = function(){
		if($scope.ButtonStatus == "OFF")
		{
			$scope.ButtonStatus = "ON";
			$scope.myStyle = buttonRed;
		}
		else
		{
			$scope.ButtonStatus = "OFF";
			$scope.myStyle = buttonGreen;	
		}
		var buttId = $('button', $element).attr('id')
		postChanges({id: buttId, text: $scope.ButtonStatus})
	}

	//
	function postChanges(obj) {
		$http.post("/html-params.json", obj, {headers: {'Content-Type': 'application/json'}}).then(
			function(res) { //Success
				console.log(res.data)
			},
			function(res) {	// Failed
				alert("POST FAILED, Server is most probably offline")
			}
		)
	}

	//==
	$scope.changeText = function() {
		var myElement = $element 
		
		var input = "<input type='text' ng-model='inputValue' placeholder='Enter Name Here'></input>"
		var button = "<button class='save' ng-click='saveChanges()'>Save</button>"
		var linkFn = $compile(input);
		var inputEl = linkFn($scope);
		linkFn = $compile(button);
		var buttEl = linkFn($scope);

		myElement.append(inputEl)
		myElement.append(buttEl)

		// Disable click events of the span element
		// Must be reenebled when "save"  button is hit
		$('span', $element).off('click');
	}
	//==
	$scope.saveChanges = function() {

		// Check if tge input string is only wite-space
		// White spaces are considered as invalid input
		if(! $scope.inputValue.replace(/\s/g, '').length){
			alert("The nput string must not be empty!")
		}
		else {
			// Re-ebable click events of the span element
			$('span', $element).on('click', $scope.changeText)	

			console.log($('span', $element).attr('id'))
			var spanId = $('span', $element).attr('id');
			$('span', $element).text($scope.inputValue);
			$http.post("/html-params.json", {id: spanId, text: $scope.inputValue}, {headers: {'Content-Type': 'application/json'}}).then(
				function(res) { //Success
					console.log(res.data)
				},
				function(res) {	// Failed
					alert("POST FAILED, Server is most probably offline")
				}
			)
			$('input', $element).remove()
			$('.save', $element).remove()
		}
	}
	$window.onload = function() {
		$http.get("/json").then(
			function(res) { //Success
				var jsonData = JSON.parse(res.data);
				var jsonObjs = jsonData.pages.home.objects;
				console.log(jsonObjs[$attrs.order])
			}
		)
	};
})