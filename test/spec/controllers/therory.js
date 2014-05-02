'use strict';

describe('Controller: TheroryCtrl', function () {

  // load the controller's module
  beforeEach(module('methodsioApp'));

  var TheroryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TheroryCtrl = $controller('TheroryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
