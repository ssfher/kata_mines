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
    it('should set "controller_loaded" variable in scope', function () {
      expect(scope.controller_loaded).toContain('loaded');
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
