(function() {
    'use strict';
    
    var ENDPOINT_URL = "http://api.openweathermap.org/data/2.5/weather?q=Melbourne&appid=73443e30ab44734a9f27625823a33828";
    
    app.factory('WeatherService', function($http, $log) {
        var instance = {};
        
        instance.load = function() {
            $log.info("Inside Weather Service Load Function");
            
            /*$http.jsonp(ENDPOINT_URL, {jsonpCallbackParam: 'callback'})
            .success( function(response) {
                console.log("Success");
            })
            .error( function(response) {
                console.log("Error");
            });*/
            
            $http({method: 'JSONP', url: ENDPOINT_URL}).
                then(function(response) {
                  console.log("Success");
                }, function(response) {
                  console.log("Error: " + response.data);
              });
        }
        
        return instance;
    })
})();