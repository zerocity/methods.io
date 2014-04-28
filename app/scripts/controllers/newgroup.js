'use strict';

angular.module('methodsioApp')
  .controller('NewgroupCtrl', function ($scope,$rootScope) {
      // reset menu
      if (typeof $rootScope.group !== 'undefined') {
         $($rootScope.group).toggleClass('hide');
         $rootScope.group='';
      }
  });
