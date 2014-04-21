'use strict';

angular.module('methodsioApp')
  .filter('markdown', function () {
    return function (input) {
      if (typeof input === 'undefined') {
        return ''
      } else {
        return marked(input)
      }
    };
  });
