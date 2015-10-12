var app = angular.module('myApp', []);

app.controller('myController', function ($scope, myService, myFactory, myConstant) {
	var vm = this;
	
	$scope.$watch('vm.in', function(newVal, oldVal) {
		vm.out = myFactory.repeat(newVal) + myConstant;
		vm.count = myService.inc();
	})
});

app.service('myService', function(myValue) {
	this.repeated = 0;
	this.inc = function() {
		myValue += 1;
		return myValue;
	}
});

app.factory('myFactory', function() {
	// factories return objects
	var factory = {};
	factory.repeat = function(s) {
		return s + " " + s; // " " converts it to string too
	}
	return factory;
})

app.constant('myConstant', '!');

app.value('myValue', 0);

app.directive('myDirective', function() {
	
});