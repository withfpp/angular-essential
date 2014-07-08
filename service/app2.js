var app = angular.module('app',[]);

//prevent error from minification.
//order is important.
app.controller('MainCtrl', ['$scope','DataService',function($scope, DataService){
  $scope.myData = DataService.data;
}])

app.factory('DataService', function(){
  return {
    data: "teo's data...."
  }
})





