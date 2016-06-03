myApp.controller('NewController', ['$scope', '$http', 'DataFactory', function ($scope, $http, DataFactory) {

  $scope.dataFactory = DataFactory;
  $scope.newHero = {};

  // make default animal type a dog & initial count 0

  if ($scope.dataFactory.factoryGetPowerList() === undefined) {
    $scope.dataFactory.factoryPullPowers().then(function () {
      $scope.powerList = $scope.dataFactory.factoryGetPowerList();
    });
  } else {
    $scope.powerList = $scope.dataFactory.factoryGetPowerList();
  }

  $scope.submitHero = function ()  {

    var hero = $scope.newHero;
    $http.post('/heroes', hero).then(function (response) {
      if (response.status == 201) {
        console.log('Hooray! Fave Saved!');
      } else {
        console.log('Boo!', response.data);
      }
    });

    $scope.powerList = $scope.dataFactory.factoryGetPowerList();
  };

}]);
