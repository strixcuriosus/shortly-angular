angular.module('shortly', [])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'linkController',
    template: '<div id="container"><div class="links" ng-controller="linkController"><div class="link" ng-repeat="link in links">
  <img src="/redirect_icon.png">
  <div class="info">
    <div class="visits"><span class="count">{{link.visits}}</span>Visits</div>
    <div class="title">{{link.title}}</div>
    <div class="original">{{link.url}}</div>
    <a href="http://localhost:4568/738dd">{{link.base_url}}</a>
  </div>
</div></div></div>'
  })
.controller('linkController', function($scope, $http){
  $http({
  method: 'GET',
  url: 'http://localhost:4568/links'
  }).success(function(data, status, headers, config) {
    $scope.links = data;
    console.log(data);
  }).error(function(data, status, headers, config) {
    //handle error
  });
});

