'use strict';

angular.module('methodsioApp')
  .controller('NewstepCtrl', function ($scope,$rootScope) {
      // reset menu
      if (typeof $rootScope.group !== 'undefined') {
         $($rootScope.group).toggleClass('hide');
         $rootScope.group='';
      }
  });
