'use strict';

angular.module('methodsioApp')
  .directive('userValue', function () {
    return {
      restrict: 'E',
      scope: {
         data: '=userInput',
         ngModel: '='
      },
      templateUrl: 'views/directives/userValue.html',
      controller: function($scope) {
         switch($scope.data.type) {
            case 'range':
               $scope.output='range'
               break
            case 'radio':
               $scope.output='radio'
               break
            case 'Checkbox':
               $scope.output='Checkbox'
               break
         }
      }
    };
  });
