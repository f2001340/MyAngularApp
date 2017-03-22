(function () {
    'use strict';
    
    var ENDPOINT_URL = "http://api.openweathermap.org/data/2.5/weather?q=Melbourne&appid=73443e30ab44734a9f27625823a33828";   
    
    app.factory('WeatherService', function ($http, $log, $templateCache) {
        var instance = {};
        
        instance.load = function () {
            $log.info("Inside Weather Service Load Function");
            
            $http.get(ENDPOINT_URL)
            .success(function (response) {
                console.log("Success");
                console.log(response);
            })
            .error( function(response) {
                console.log("Error");
            });
        }
        
        return instance;
    })
})();