var tableRow = "<tr><td><input type='text'/></td></tr>";

var app = angular.module('myApp', []);

app.directive('myTodo', function(){
    return {
      	restrict: 'EA',
      	scope : true,
      	template: '<h1>This is head {{todo[0].completed}} </h1><div><input type="checkbox" ng-model="todo[0].completed"> {{todo[0].name}}</div>',
		};
	});
	app.controller('main', function($scope){
		$scope.todo = [
		{name: 'Create a custom directive', completed: true},
	    {name: 'Learn about restrict', completed: true},
	    {name: 'Master scopes', completed: false}
		];
});