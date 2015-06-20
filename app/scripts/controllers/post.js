'use strict';

/**
 * @ngdoc function
 * @name potFetApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the potFetApp
 */
angular.module('potFetApp')
  .controller('PostCtrl', function ($scope, $http, $routeParams) {
    $http.get('tmp_data.json').success(function(data) {
      $scope.items = data.items;
      $scope.postId = $routeParams.postId;
      $scope.item = $scope.items[ $scope.postId ];
    });
      
    
    
    
  });
