angular.module('HScards', [
  'HScards-services'
])
  .controller('CardsController', function($scope, apiCall){

    $scope.searchCollection = function(){
      console.log(typeof $scope.cardSearch);
      apiCall.searchCollection($scope.cardSearch).then(function(data){
        console.log(data.data);
        addCostAnalysis(data.data);
        $scope.searchResults = data.data;
      })
    }

    // $scope.getCollection = function(){
    //   apiCall.getCollection().then(function(data){
    //     console.log(data);
    //   })
    // }

    function addCostAnalysis(cardObjArray){
      cardObjArray.forEach(function(cardObj){
        dustConversion(cardObj);
        cardObj.grindTime = Math.ceil(cardObj.dustCost / 60) || "No Time";
        cardObj.dollarCost = (cardObj.dustCost / 100).toFixed(2);
      });
    };

    function dustConversion(cardObj){
      var rarityConvert = {
        'Legendary': 1600,
        'Epic': 800,
        'Rare': 100,
        'Common': 40,
        'Free': 0
      }
      cardObj.dustCost = rarityConvert[cardObj.rarity];
    }

  })
