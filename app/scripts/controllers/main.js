'use strict';

angular.module('methodsioApp')
  .controller('MainCtrl', function ($scope, dummyJson) {
    var test = dummyJson.getDummy();
    console.log(test) ;
    $scope.data = dummyJson.getDummy();

});
