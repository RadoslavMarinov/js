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
 
var app = angular.module("myApp", []) 
console.log(buttonGreen['background-color']);
app.controller("myController", function($scope) {
	$scope.ButtonStatus  = "OFF";
	$scope.myStyle = buttonGreen  //{'background-color':'#00FF00', 'font-size': '24px', 'width': '80px'}
	$scope.toggleRelay = function(){
		if($scope.ButtonStatus == "OFF")
		{
			$scope.ButtonStatus = "ON";
			$scope.myStyle = buttonRed;
			console.log("rreer")
			$("#second-button").text("Riko");	
		}
		else
		{
			$scope.ButtonStatus = "OFF";
			$scope.myStyle = buttonGreen;	
		}
	}
})