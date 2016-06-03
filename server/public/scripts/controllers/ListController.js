myApp.controller('ListController', ['$scope', '$http', 'DataFactory', function ($scope, $http, DataFactory) {

  $scope.dataFactory = DataFactory;
  $scope.refreshHeroes();
  $scope.filterPower_name = '';

  if ($scope.dataFactory.factoryGetPowerList() === undefined) {
    $scope.dataFactory.factoryPullPowers().then(function () {
      $scope.powerList = $scope.dataFactory.factoryGetPowerList();
    });
  } else {
    $scope.powerList = $scope.dataFactory.factoryGetPowerList();
  }

  $scope.refreshHeroes = function () {
    $http.get('/heroes').then(function (response) {
      console.log('Async data returned: ', response.data);
      $scope.heroes = response.data;
    });
  };

  $scope.deleteFav = function (id) {
    $http.delete('/pets/' + id)
      .then(function (response) {
        console.log('DELETE /pets ', id);
        $scope.dataFactory.factoryRefreshFaveData().then(function () {
          $scope.faves = $scope.dataFactory.factoryGetFaves();
        });
      });
  };

}]);
