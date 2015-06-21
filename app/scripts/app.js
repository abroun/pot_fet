'use strict';

/**
 * @ngdoc overview
 * @name potFetApp
 * @description
 * # potFetApp
 *
 * Main module of the application.
 * NOTE: The 'config' dependency is generated via grunt
 */
angular
  .module('potFetApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'config'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/:postId', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
