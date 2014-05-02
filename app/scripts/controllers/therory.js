'use strict';

angular.module('methodsioApp')
  .controller('TheroryCtrl', function ($scope,CreateDB) {

   $scope.editorInput = '# Therory\n';
   $scope.editorInput = $scope.editorInput + '## Abstrac\n\n Place your Equipment here\n\n';
   $scope.editorInput = $scope.editorInput + '## Introduction\n\n Place your Introduction here\n\n';
   $scope.editorInput = $scope.editorInput + '### Subheader \n\n Place your context here\n\n';


});
