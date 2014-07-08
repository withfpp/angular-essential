// teoDirective

// <teoDirective></teoDirective>

// <div teoDirective></div>

// <div class="teoDirective"></div>

var app = angular.module('app', []);

app.controller('MainCtrl', function($scope){
  $scope.photo = {
    url: "http://dpshots.com/images/new_zealand_photography/New-Zealand-Great-Alpine-Road.jpg",
    date: "June 21, 2014"
  }
});

// app.directive('teophoto', function(){
//   return {
//     restrict: 'E',
//     template: '<figure><img width="400px" /><figcaption/></figure>',
//     replace: true,
//     link: function(scope, element, attrs){
//       attrs.$observe('caption', function(value){
//         element.find('figcaption').text(value)
//       });
//       attrs.$observe('photoSrc', function(value){
//         element.find('img').attr('src', value)
//       });
//     }
//   }
// })

app.directive('teophoto', function(){
  return {
    restrict: 'E',
    template: '<figure>' +
              '<img width="400px" ng-src="{{photoSrc}}" />'+
              '<figcaption>{{caption}}</figcaption>' +
              '</figure>',
    replace: true,
    scope: {
      caption: '@',
      photoSrc:'@'
    }          
  }
})





