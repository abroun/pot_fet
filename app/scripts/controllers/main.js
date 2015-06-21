'use strict';

/**
 * @ngdoc function
 * @name potFetApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the potFetApp
 */
angular.module('potFetApp')
  .controller('MainCtrl', function ($scope, $http, $routeParams, helperMethods, FLICKR_PROXY_URL) {
    
    $scope.tags = 'potato';
    if ($routeParams.tags != undefined) {
      $scope.tags = $routeParams.tags;
    }
    
    $http.get(FLICKR_PROXY_URL, { params: { tags: $scope.tags } }).success(function(data) {
      $scope.items = data.items;
    });
    
    $scope.formatPublishedDate = helperMethods.formatPublishedDate;
    
    $scope.buildPostLink = function (itemIdx) {
      return '#/' + itemIdx.toString() + '?tags=' + encodeURIComponent($scope.tags);
    };
  });
