angular.module('HScards', [
  'HScards-services'
])
  .controller('CardsController', function($scope, apiCall){
    $scope.getCollection = function(){
      apiCall.getCollection();
    }
    $scope.hello = 'Hello World!';
  })
// .config(function($routeProvider, $httpProvider){
//   $routeProvider
//     .when('/', {
//       templateUrl: ''
//     })
//     .otherwise({redirectTo: '/'})
// })
