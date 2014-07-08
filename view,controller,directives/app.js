var app = angular.module('app',[]);

//1. ng-class example

app.controller('MainCtrl', function ($scope){
 $scope.classVar = true;

 $scope.mydata = {val: "Teo"}

 // 4. $scope.$watch
 $scope.$watch('mydata.val', function(newval){
   $scope.mydata.toolong = newval.length > 15
 });

 // 5. another watch
 $scope.num = 0;
 $scope.nums = [];

 $scope.increment = function(){
   $scope.num++;
 }

 $scope.breakit = $scope.$watch('num', function(){
   $scope.nums.push($scope.num);
 });


 // 6. ng-cloak is prevent that user can't see {{ }} 
 $scope.someData = "this is about ng-cloak .......";


});

app.controller('SubCtrl', function ($scope){

});






//production way, best way.
// angular.module('controllers',[]).controller('MainCtrl', function ($scope){
//    $scope.val = "test123123123";
// });