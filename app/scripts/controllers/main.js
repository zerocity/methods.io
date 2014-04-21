'use strict';

angular.module('methodsioApp')
.controller('MainCtrl', function ($scope, dummyJson) {

   $scope.data = dummyJson.getDummy();


   $scope.editor = function (input){
      $('.abstract').toggleClass('hide')
   }

});
