var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: 'HomeController',
    })
    .when('/fav', {
      templateUrl: '/views/fav.html',
      controller: 'FavController',
    })
    .otherwise({
      redirectTo: 'home',
    });
}]);
