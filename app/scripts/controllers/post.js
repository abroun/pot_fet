'use strict';

/**
 * @ngdoc function
 * @name potFetApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the potFetApp
 */
angular.module('potFetApp')
  .controller('PostCtrl', function ($scope, $http, $routeParams, helperMethods, FLICKR_PROXY_URL) {
    
    $scope.items = [];
    $scope.item = {};
    $scope.loaded = false;
    
    $scope.tags = 'potato';
    if ($routeParams.tags !== undefined) {
      $scope.tags = $routeParams.tags;
    }
    
    $http.get(FLICKR_PROXY_URL, { params: { tags: $scope.tags } }).success(function(data) {
      $scope.items = data.items;
      $scope.postId = $routeParams.postId;
      $scope.item = $scope.items[ $scope.postId ];
      $scope.loaded = true;
    });
      
    $scope.formatPublishedDate = helperMethods.formatPublishedDate;
    $scope.formatImageTitle = helperMethods.formatImageTitle;
    
    $scope.buildBackLink = function () {
      return '#/?tags=' + encodeURIComponent($scope.tags);
    };
    
    $scope.buildSearchLink = function (tag) {
      return '#/?tags=' + encodeURIComponent(tag);
    };
  });
