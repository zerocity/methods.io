'use strict';

angular.module('methodsioApp')
   .controller('MainCtrl', function ($scope, dummyJson) {

      $scope.data = dummyJson.getDummy();

      $scope.getScope = function () {
         console.log('test');
         console.log($scope.data.procedure);
      }

      $scope.group='';

      $scope.leo = function (element,animate) {
         if ($scope.group !== element) {
            if ($scope.group.length === '') {

               $scope.group = element;
               console.log('group', $scope.group);

            } else {
               $($scope.group).toggleClass(animate)
               $scope.group = element;
            }

         console.log('group', $scope.group);
         $(element).toggleClass(animate)

         }else{
            $scope.group = '';
            $(element).toggleClass(animate)
         }
      }

      $scope.md = dummyJson.json2md(dummyJson.getDummy());

      $scope.editorHight= $(window).height() - 50;

        $scope.codemirrorLoaded = function(_editor){
          // Editor part
          var _doc = _editor.getDoc();
          _editor.focus();

          // Options
          _editor.setOption('lineNumbers', true);
          _editor.setOption('lineWrapping', true);
          _editor.setOption('mode','markdown');
          _editor.setOption('theme','xq-light');

          _doc.markClean()
          // Events
           _editor.on('scroll', function (instance){
               var scrollInfo = instance.getScrollInfo();
               var calc = (scrollInfo.top / scrollInfo.height) * $('#page')[0].scrollHeight;
               $('#page').scrollTop(calc)
            });
           // end of codemirrow
        };

   $(window).resize(function() {
      $scope.editorHight = $(window).height() - 50;
   });

});
