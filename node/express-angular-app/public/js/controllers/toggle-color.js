 
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