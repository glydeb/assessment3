myApp.controller('FavController', ['$scope', '$http', function ($scope, $http) {

  $scope.faves = [];
  getFaves();

  function getFaves() {
    $http.get('/pets')
      .then(function (response) {
        if (response.data !== undefined) { $scope.faves = response.data; }

        console.log('GET /pets ', response.data);
      });
  }
  $scope.deleteFav = function (id) {
    $http.delete('/pets/' + id)
      .then(function (response) {
        console.log('DELETE /movies ', id);
        getFaves();
      });
  };

}]);
