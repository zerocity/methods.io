'use strict';

angular.module('methodsioApp')
   .controller('MainCtrl', function ($scope, dummyJson) {

      $scope.data = dummyJson.getDummy();

      $scope.getScope = function () {
         console.log('test');
         console.log($scope.data.procedure);
      }

      $scope.leo = function (element,animate) {
         $(element).toggleClass(animate);
      }

});
