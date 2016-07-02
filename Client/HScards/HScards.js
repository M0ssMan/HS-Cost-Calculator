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
        cardObj.grindTime = grindTime(cardObj.dustCost);
        cardObj.dollarCost = dollarCost(cardObj.dustCost);
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

    function grindTime(dustCost){
      var days = 'day';
      var daysAmount = Math.ceil(dustCost / 60)
      if(daysAmount){
        if(daysAmount > 1){
          days = "days"
        }
        return "Play " + daysAmount + " " + days + " for 1 hour/day"
      }
      return "No time.";
    }

    function dollarCost(dustCost){
      var money = (dustCost / 100).toFixed(2);
      if(money > 0) {
        return "Costs $" + money;
      }
      return "It's Free";
    }

  })
