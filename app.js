var app = angular.module('myApp', ['myExternalModule']);

app.controller('myController', function ($scope, myService, myFactory, myConstant) {
  var vm = this;
  vm.in = "Hello, world!"
  
  $scope.$watch('vm.in', function(newVal, oldVal) {
    vm.out = myFactory.repeat(newVal) + myConstant;
    vm.count = myService.inc();
  })
});

app.service('myService', function() {
  var val = 0;
  this.inc = function() {
    val += 1;
    return val;
  }
});

app.factory('myFactory', function() {
  var factory = {};
  factory.repeat = function(s) {
    return s + " " + s;
  }
  return factory;
})

app.constant('myConstant', '!');

app.value('myValue', 0);

app.directive('myElementDirective', function() {
  return {
    restrict: 'E',
    transclude: true,
    template: '<div style="border: 1px solid red;" ng-transclude></div>'
  }
});

var externalModule = angular.module('myExternalModule', []);

externalModule.directive('myAttributeDirective', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      console.log(attrs)
      element.css('color', attrs.myAttributeDirective || 'red');
    }
  }
});

app.filter('myFilter', function() {
  return function(input, option) {
    return input.split('').sort(function(a,b) {
      return (option) ? (a<b) : (a>b);
    }).join('');
  }
});