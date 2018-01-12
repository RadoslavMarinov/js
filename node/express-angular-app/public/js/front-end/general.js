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
