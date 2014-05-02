'use strict';

angular.module('methodsioApp')
  .controller('SetupCtrl', function ($scope) {

   $scope.editorInput = '# Setup \n\n';
   $scope.editorInput = $scope.editorInput + '## Equipment\n\n - Place your Equipment here\n\n';
   $scope.editorInput = $scope.editorInput + '## Materials\n\n - Place your Materials here\n\n';


});
