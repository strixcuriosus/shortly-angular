angular.module('shortly', [])
.controller('linkController', function($scope, $http){
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

