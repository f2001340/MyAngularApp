var app = angular.module("myApp", ['ngRoute']); 

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: "templates/main.html"
	})
	.when('/first', {
		templateUrl: "templates/first.html"
	})
	.when('/second', {
		templateUrl: "templates/second.html"
	})
    .otherwise({
                redirectTo: '/'
    });
});

app.controller("mainCtrl", ['$scope', function($scope) {

}]);