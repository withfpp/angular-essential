
// Service Types
//    Constants
//    Values
//    Factories
//    Services
//    Providers
//    Decorators

var app = angular.module('app',[]);

app.controller('MainCtrl', function ($scope, myFac){
   console.log(myFac.getdata()) // works fine.
   console.log(myFac.mydata); // this is not gonna work.
});

app.controller('SecCtrl', function ($scope, myFac2, myService){
  console.log(myFac2.getData());
  myFac2.addData('add add add add from Factory myFac2');
  console.log(myFac2.getData());

  console.log(myService.getData());
  myService.addData('add add add add Service');
  console.log(myService.getData());

});

app.controller('ThirdCtrl', function($scope, myTest){
  console.log(myTest.getData());
  myTest.addData('add from myTest');
  console.log(myTest.getData());
})

app.controller('FourthCtrl', function($scope, myFac3){
   console.log(myFac3.getData());
   myFac3.reverse();
   console.log(myFac3.getData());
});


//constant can't be modified by the decorator, but value is can.
app.constant('constService', {attr:"this is const data!"});

app.value('valService', function(){ return "this is retruned from a function"});

//can handle the private data using Factory.
app.factory('myFac', function(){
   var mydata = "this is some other data"; //this is private data.
   return {
      getdata: function(){
         return mydata;
      }
   }
})


app.factory('myFac2', function(){
   var myString = "some string data";
   var addToString = function (newstr){
      myString += newstr;
   }
   return {
      getData: function(){ return myString },
      setData: function(data){ myString = data },
      addData: addToString
   }
})

app.factory('myFac3', function(){
   var myString = "some string data";
   var addToString = function (newstr){
      myString += newstr;
   }
   return {
      getData: function(){ return myString },
      setData: function(data){ myString = data },
      addData: addToString
   }
})

// how to use service. working with Class.
app.service('myService', ServiceClass);

function ServiceClass(){
   var myString = "some string data";
   var addToString = function (newstr){
      myString += newstr;
   }
   this.getData = function(){
      return "String contains: " + myString
   }
   this.addData = addToString
   
}


// provider
app.provider('myTest', function(){
   var myString = "some string data";
   var addToString = function (newstr){
      myString += newstr;
   }
   return {
      setData: function(data){
         myString = data
      },
      $get: function (){
         return {
            getData: function(){
               return "String contains: " + myString
            },
            addData: addToString
         }
      }
   }
})

app.config(function(myTestProvider){
   myTestProvider.setData("diffrent string...from myTestProvider");
})


// decorator , use this for modifying something in your factory.
// keep your factory code clean.

app.config(function($provide){
   $provide.decorator('myFac3', function($delegate){
      $delegate.reverse = function() {
         $delegate.setData($delegate.getData().split('').reverse().join(''))
      }
      return $delegate;
   })
})




