var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/new', {
      templateUrl: '/views/new.html',
      controller: 'NewController',
    })
    .when('/list', {
      templateUrl: '/views/list.html',
      controller: 'ListController',
    })
    .otherwise({
      redirectTo: 'new',
    });
}]);
