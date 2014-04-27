'use strict';

describe('Controller: NewstepCtrl', function () {

  // load the controller's module
  beforeEach(module('methodsioApp'));

  var NewstepCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewstepCtrl = $controller('NewstepCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
