'use strict';

/**
 * @ngdoc function
 * @name potFetApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the potFetApp
 */
angular.module('potFetApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
