'use strict';

angular.module('App', [
  'ngRoute',
  'Minesweeper'
])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'scripts/main/views/dashboard.html'
  });
});


var underscore = angular.module('underscore', []);
underscore.factory('_', ['$window', function($window) {
  return $window._;
}]);