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
		$http.post(url, postData, congig).then(
			function(res) { //Success
				console.log(res.data)
			},
			function(res) {	// Failed

			}
		)
	}
})
 
angular.module("myApp").controller("myController", function($scope) {
	$scope.ButtonStatus  = "OFF";
	$scope.myStyle = buttonGreen  //{'background-color':'#00FF00', 'font-size': '24px', 'width': '80px'}
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
	}
})