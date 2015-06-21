'use strict';

/**
 * @ngdoc function
 * @name potFetApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the potFetApp
 */
angular.module('potFetApp')
  .controller('MainCtrl', function ($scope, $http, helperMethods, FLICKR_PROXY_URL) {
    $http.get(FLICKR_PROXY_URL).success(function(data) {
      $scope.items = data.items;
    });
    
    $scope.formatPublishedDate = helperMethods.formatPublishedDate;
  });
