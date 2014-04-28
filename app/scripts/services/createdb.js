'use strict';

angular.module('methodsioApp')
  .factory('CreateDB', function (pouchdb) {
    return pouchdb.create('methodsioDB');
});
