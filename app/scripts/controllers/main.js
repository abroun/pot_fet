'use strict';

/**
 * @ngdoc function
 * @name potFetApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the potFetApp
 */
angular.module('potFetApp')
  .controller('MainCtrl', function ($scope, $http, helperMethods) {
    $http.get('tmp_data.json').success(function(data) {
      $scope.items = data.items;
    });
    
    $scope.formatPublishedDate = helperMethods.formatPublishedDate;
  });
