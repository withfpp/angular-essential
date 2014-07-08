var app = angular.module('app',[]);

app.controller('MainCtrl', function($scope, $filter){

   // 1
   $scope.data = { arr: [{name:"john", age:35},{name:"izabel", age:50},{name:"Tomson",age:18},{name:"Tom",age:20},{name:"Ronaldo",age:28}]}
});

//2. custom filter
app.filter('charlimit', function(){
   return function (input, length){
      if(!length){
         length = 10
      }
      if(!input){
         return ''
      }
      if(input.length <= length){
         return input
      }else{
         return input.substring(0,length);
      }

   }
});

//3. custom filter

app.filter('candrink', function(){
   return function (data, minage){
      var filtered = [];
      if(!minage){
         minage = 21;
      }
      for (var i = 0; i < data.length; i++){
         var value = data[i];
         if (value.age >= minage ){
            filtered.push(value);
         }
      }
      return filtered;
   }
});


