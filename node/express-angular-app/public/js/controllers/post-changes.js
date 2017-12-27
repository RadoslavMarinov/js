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