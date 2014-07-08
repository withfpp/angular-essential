var app = angular.module('app', ['ngRoute']);

app.controller('MainCtrl', function($scope, $routeParams){
   $scope.somedata = "some data";
});

app.config(function($routeProvider){
   $routeProvider
      .when('/', {templateUrl: 'view.html'})
      .when('/test/:myparam', {templateUrl: 'view2.html'})
      .otherwise({template: 'Couldn\'t match a route'})
})