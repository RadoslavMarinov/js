var app = angular.module("myApp", [])

app.controller("tableController", function ($scope) {
	$scope.addRow = function () {
		$("#the-header").append("<h2>This is appended header 2 </h2>");
	}
})