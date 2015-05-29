/*global $:false */
'use strict';

/**
 * @ngdoc overview
 * @name landingfinalApp
 * @description
 * # landingfinalApp
 *
 * Main module of the application.
 */
angular
  .module('landingfinalApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/signUp', {
        templateUrl: 'views/signUp.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

$(window).bind('resize', function() {
     location.reload();
});
