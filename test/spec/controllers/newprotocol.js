'use strict';

describe('Controller: NewprotocolCtrl', function () {

  // load the controller's module
  beforeEach(module('methodsioApp'));

  var NewprotocolCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewprotocolCtrl = $controller('NewprotocolCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
