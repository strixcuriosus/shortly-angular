var app = angular.module('shortly', ['ngRoute']);
app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'client/templates/home.html',
          controller: 'linkController'
        })
        .when('/create', {
          templateUrl: 'client/templates/shorten.html',
          controller: 'createController',
        });
    }]);
app.controller('linkController', function($scope, $http){
  $http({
  method: 'GET',
  url: 'http://localhost:4567/links'
  }).success(function(data, status, headers, config) {
    $scope.links = data;
    console.log(data);
  }).error(function(data, status, headers, config) {
    //handle error
  });
});
app.controller('createController', function($scope, $http){
  $scope.submitLink = function(){
    $http({
      method: 'POST',
      url: 'http://localhost:4567/links',
      data: {url: $scope.longLink}
    }).success(function(data, status, headers, config) {
      $scope.links = data;
      console.log(data);
    }).error(function(data, status, headers, config) {
       console.log("fail");
      });
  };
});
