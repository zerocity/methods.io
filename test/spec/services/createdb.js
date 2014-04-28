'use strict';

describe('Service: CreateDB', function () {

  // load the service's module
  beforeEach(module('methodsioApp'));

  // instantiate service
  var CreateDB;
  beforeEach(inject(function (_CreateDB_) {
    CreateDB = _CreateDB_;
  }));

  it('should do something', function () {
    expect(!!CreateDB).toBe(true);
  });

});
