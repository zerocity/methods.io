'use strict';

angular.module('methodsioApp')
  .controller('NewstepCtrl', function ($scope) {
      // reset menu
      if (typeof $rootScope.group !== 'undefined') {
         $($rootScope.group).toggleClass('hide')
         console.log($rootScope.group);
         $rootScope.group=''
      }else{
         console.log($rootScope.group);
      }

  });
