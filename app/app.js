var app = angular.module("myApp", ['ngRoute']); 

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: "app/main/main.html",
        controller: "mainController"
	})
	.when('/first', {
		templateUrl: "app/first/first.html"
	})
	.when('/second', {
		templateUrl: "app/second/second.html"
	})
    .otherwise({
                redirectTo: '/'
    });
});

/*app.config(['$sceDelegateProvider', function($sceDelegateProvider) {
  // We must whitelist the JSONP endpoint that we are using to show that we trust it
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'http://api.openweathermap.org/**'
  ]);
}])*/

app.config(['$sceDelegateProvider', function($sceDelegateProvider) {
  // We must whitelist the JSONP endpoint that we are using to show that we trust it
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://angularjs.org/**'
  ]);
}])

app.controller("mainCtrl", ['$scope', '$log', function($scope, $log) {
    $log.debug("inside main Ctrl");
}])

app.controller("mainController", ['$scope', '$log', 'WeatherService', function($scope, $log, WeatherService) {
    $log.debug("Main Controller");
    
    $scope.getWeather = function () {
        $log.debug("Weather Button Clicked");
        WeatherService.load();
    }
}]);