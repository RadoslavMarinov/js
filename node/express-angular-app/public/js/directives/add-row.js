var app = angular.module("myApp", [])

app.directive("addRow", directiveFunc() {
		return {
		link: function($scope, el, attr) {
			el.bind("click", function() {
				$("#the-header").append("<h2>This is appended header 2 </h2>");
			})
		}
	};	
});