'use strict';

describe('Controller: minesweeper', function () {

  beforeEach(module('Minesweeper'));
  beforeEach(module('underscore'));

  var controller;
  var scope;

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    controller = $controller('minesweeper', { $scope: scope });
  }));

  describe('On instance', function () {
    it('should set "controller_loaded" and mines variable in scope', function () {
      expect(scope.controller_loaded).toContain('loaded');
      expect(scope.mines).toEqual([1,8]);
      expect(scope.positions).toEqual([[1,2,3],[4,5,6],[7,8,9]]);
    });
    it('should show if a mine is clicked or how many mines are around the position', function(){
      var number_mines = scope.verifyMine(scope.positions,scope.mines,9);
      expect(number_mines).toBe(1);
      var number_mines2 = scope.verifyMine(scope.positions,scope.mines,1);
      expect(number_mines2).toBe(-1);
      var number_mines3 = scope.verifyMine(scope.positions,scope.mines,3);
      expect(number_mines3).toBe(0);
      var number_mines4 = scope.verifyMine(scope.positions,scope.mines,5);
      expect(number_mines4).toBe(2);
    });
    

  });

 
  describe('when going to /minesweeper', function () {

    var route, location, rootScope, httpBackend;

    beforeEach(inject(function ($route, $location, $rootScope, $httpBackend) {
      route = $route;
      location = $location;
      rootScope = $rootScope;
      httpBackend = $httpBackend;

      httpBackend.when('GET', 'scripts/mines/views/minesweeper.html').respond('<div></div>');
    }));

    afterEach(function () {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it('should use minesweeper.html and controller', function () {
      expect(route.current).toBeUndefined();

      location.path('/minesweeper');

      httpBackend.flush();

      expect(route.current.templateUrl).toBe('scripts/mines/views/minesweeper.html');
      expect(route.current.controller).toBe('minesweeper');
    });
  });

});
