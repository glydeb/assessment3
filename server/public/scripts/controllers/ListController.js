myApp.controller('ListController', ['$scope', '$http', 'DataFactory', function ($scope, $http, DataFactory) {

  $scope.dataFactory = DataFactory;
  $scope.filterPower_name = '';

  $scope.getPowers = function () {
    $http.get('/powers').then(function (response) {
      console.log('Async data returned: ', response.data);
      $scope.powerList = response.data;
    });
  };

  $scope.refreshHeroes = function () {
    $http.get('/heroes').then(function (response) {
      console.log('Async data returned: ', response.data);
      $scope.heroes = response.data;
    });
  };

  $scope.deleteFav = function (id) {
    $http.delete('/heroes/' + id)
      .then(function (response) {
        console.log('DELETE /heroes ', id);
        $scope.refreshHeroes();
      });
  };

  $scope.refreshHeroes();
  $scope.getPowers();

}]);
