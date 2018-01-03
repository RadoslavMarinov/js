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
 
angular.module("myApp").controller("myController", function($scope, $compile, $element, $http) {
	$scope.ButtonStatus  = "OFF";
	$scope.inputValue = "Button"
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
	$scope.changeText = function(id) {
		var myElement = angular.element(document.querySelector('#'+id));
		
		var input = "<input type='txt' ng-model='inputValue'></input>"
		var button = "<button class='save' ng-click='saveChanges()'>Save</button>"
		var linkFn = $compile(input);
		var inputEl = linkFn($scope);
		linkFn = $compile(button);
		var buttEl = linkFn($scope);


		myElement.append(inputEl)
		myElement.append(buttEl)
	}
	$scope.saveChanges = function() {
		console.log($('span', $element).attr('id'))
		var spanId = $('span', $element).attr('id');
		$('span', $element).text($scope.inputValue);
		$http.post("/html-params.json", {id: spanId, name: $scope.inputValue}, {headers: {'Content-Type': 'application/json'}}).then(
			function(res) { //Success
				console.log(res.data)
			},
			function(res) {	// Failed

			}
		)
		$('input', $element).remove()
		$('.save', $element).remove()
	}
})