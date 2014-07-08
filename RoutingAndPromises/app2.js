var app = angular.module('app', ['ngRoute']);

app.controller('MainCtrl', function($scope, $q, $timeout){

   $scope.myData = "some old data...";

   var defer = $q.defer();

   defer.promise
      .then(function(val){
         $scope.myData = val;
      })

   $timeout(function(){
      defer.resolve("some NEW DATA");
   },3000);  
});