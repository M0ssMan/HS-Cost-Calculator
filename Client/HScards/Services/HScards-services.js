angular.module('HScards-services', [])
  .factory('apiCall', function($http){

    var getCollection = function(){
        return $http({
          method: "GET",
          url: 'getCollection'
        })
    }

    var searchCollection = function(query){
      return $http({
        method: "GET",
        url: 'searchCollection/' + query
      })
    }

    return {
      getCollection: getCollection,
      searchCollection: searchCollection
    }
  })
