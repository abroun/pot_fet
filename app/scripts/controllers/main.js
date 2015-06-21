'use strict';

/**
 * @ngdoc function
 * @name potFetApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the potFetApp
 */
angular.module('potFetApp')
  .controller('MainCtrl', function ($scope, $http, $routeParams, $location, helperMethods, FLICKR_PROXY_URL) {
    
    $scope.searchTags = ""; 
     
    $scope.tags = 'potato';
    if ($routeParams.tags !== undefined) {
      $scope.tags = $routeParams.tags;
    }
    
    $http.get(FLICKR_PROXY_URL, { params: { tags: $scope.tags } }).success(function(data) {
      $scope.items = data.items;
    });
    
    $scope.formatPublishedDate = helperMethods.formatPublishedDate;
    
    $scope.buildPostLink = function (itemIdx) {
      return '#/' + itemIdx.toString() + '?tags=' + encodeURIComponent($scope.tags);
    };
    
    $scope.searchForTag = function () {
        if ($scope.searchTags === '') {
            return;     // Nothing to do
        }
        
        window.location = '#/?tags=' + encodeURIComponent($scope.searchTags);
    };
    
    $scope.onSearchKeyPress = function(event) {
        if (event.keyCode === 13) {
            $scope.searchForTag();
        }
    };
  });
