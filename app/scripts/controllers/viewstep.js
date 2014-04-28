'use strict';

angular.module('methodsioApp')
  .controller('ViewstepCtrl', function ($scope,$stateParams,$rootScope) {
      console.log($stateParams);
      var viewStep = this

      // reset menu
      if (typeof $rootScope.group !== 'undefined') {
         $($rootScope.group).toggleClass('hide')
         console.log($rootScope.group);
         $rootScope.group=''
      }else{
         console.log($rootScope.group);
      }

});
