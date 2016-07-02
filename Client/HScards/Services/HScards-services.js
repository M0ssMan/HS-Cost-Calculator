angular.module('HScards-services', [])
  .factory('apiCall', function($http){
    // var getCollection = function(){
    //   return $http({
    //     method: "GET",
    //     url: 'api/collection'
    //   })
    //  }
    var getCollection = function(){
      console.log('pushed button');

    }

    return {
      getCollection: getCollection
    }
  })
