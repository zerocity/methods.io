'use strict';

describe('Service: AppDatabase', function () {

  // load the service's module
  beforeEach(module('methodsioApp'));

  // instantiate service
  var AppDatabase;
  beforeEach(inject(function (_AppDatabase_) {
    AppDatabase = _AppDatabase_;
  }));

  it('should do something', function () {
    expect(!!AppDatabase).toBe(true);
  });

});
