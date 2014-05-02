'use strict';

describe('Controller: SteupCtrl', function () {

  // load the controller's module
  beforeEach(module('methodsioApp'));

  var SteupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SteupCtrl = $controller('SteupCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
