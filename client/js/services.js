//these are just references the instance of related lib so we can inject them to the controllers/services in an angular way.
  app.factory('jQuery', [
      '$window',
      function ($window) {
          return $window.jQuery;
      }
  ]);

  app.factory('Modernizr', [
      '$window',
      function ($window) {
          return $window.Modernizr;
      }
  ]);

  app.factory('Highcharts', [
  '$window',
  function ($window) {
      return $window.Highcharts;
  }
]);



// app.factory('httpFactory', ['$http', function($http){

//   var obj = {};

//   obj.get = function(url){
//     return $http.get(url);
//   };

//   obj.post = function(url, payload){
//     return $http.post(url, payload);
//   };

//   obj.put = function(url, payload){
//     return $http.put(url, payload);
//   };

//   obj.delete = function(url){
//     return $http.delete(url);
//   };

//   return obj;

// }]);

