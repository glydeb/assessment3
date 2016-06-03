myApp.factory('DataFactory', ['$http', function ($http) {
  console.log('dataFactory running');

  // PRIVATE
  var powers = undefined;

  function pullPowers() {
    var promise = $http.get('/powers').then(function (response) {
      console.log('Async data returned: ', response.data);
      powers = response.data;
    });

    return promise;
  }

  // PUBLIC
  var publicApi = {
    factoryPullPowers: function () {
      return pullPowers();
    },

    factoryGetPowerList: function () {
      // return our array
      return powers;
    }
  };

  return publicApi;

}]);
