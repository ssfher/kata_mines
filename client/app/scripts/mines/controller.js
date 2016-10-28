'use strict';

angular.module('Minesweeper')
.controller('minesweeper', function ($scope) {

  $scope.controller_loaded = 'Minesweeper loaded!';

})
.config(function ($routeProvider) {
  $routeProvider
  .when('/minesweeper', {
    templateUrl: 'scripts/mines/views/minesweeper.html',
    controller: 'minesweeper'
  });
});
