  var app = angular.module("myApp", ["ngRoute"]);

  app.config(function($routeProvider) {
      $routeProvider
    //home page intro animation page
        .when('/', {
          templateUrl: '../partials/home.html',
          controller: 'homeController',
          access: {restricted: false}
        })
    //darkroom, play area page
        .when('/darkroom', {
          templateUrl: '../partials/darkroom.html',
          controller: 'darkroomController',
          access: {restricted: false}
        })
    //registration popup
        .when('/register', {
          templateUrl: '../partials/register.html',
          controller: 'registerController',
          access: {restricted: false}
        })
    //login popup
        .when('/login', {
          templateUrl: '../partials/login.html',
          controller: 'registerController',
          access: {restricted: false}
        })
    //log functionality
        .when('/logout', {
          controller: 'logoutController',
          access: {restricted: true}
        })
    //about page
        .when('/about', {
          templateUrl: '../partials/about.html',
          controller: 'registerController',
          access: {restricted: false}
        })
    //contact page
        .when('/contact', {
          templateUrl: '../partials/contact.html',
          controller: 'registerController',
          access: {restricted: false}
        })
    //profile page
        .when('/profile', {
          templateUrl: '../partials/profile.html',
          controller: 'profileController',
          access: {restricted: true}
        })
    //d3 stats
        .when('/d3', {
          templateUrl: '../partials/d3.html',
          controller: 'profileController',
          access: {restricted: true}
        })
      //login page
        .otherwise({
          redirectTo: '/',
          access: {restricted: false}
        });
  });

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

