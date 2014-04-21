'use strict';

describe('Service: dummyJson', function () {

  // load the service's module
  beforeEach(module('methodsioApp'));

  // instantiate service
  var dummyJson;
  beforeEach(inject(function (_dummyJson_) {
    dummyJson = _dummyJson_;
  }));

  it('should do something', function () {
    expect(!!dummyJson).toBe(true);
  });

});
