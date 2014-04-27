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

         $(element).toggleClass(animate)

         }else{
            $scope.group = '';
            $(element).toggleClass(animate)
         }
      }

      $scope.ace  =function(_editor) {

         var _session = _editor.getSession();
         // Ace settings

         _editor.setHighlightActiveLine(true);
         _editor.setShowPrintMargin(true);

         var newHeight = function() {
             return _editor.getSession().getScreenLength()
                  * _editor.renderer.lineHeight
                  + _editor.renderer.scrollBar.getWidth();
         }

         _session.on('changeScrollTop',function (scrollBarTop){
            var scrollbarHeight = newHeight();
            var calc = (scrollBarTop / scrollbarHeight) * $('#page')[0].scrollHeight;
            // it is not posible to scroll to the bottom on the preview ...
            $('#page').scrollTop(calc)
         });
      }

      //$scope.md = dummyJson.json2md(dummyJson.getDummy());
      $scope.md = dummyJson.getMirko();
      dummyJson.md2json($scope.md);

      $scope.editorHight= $(window).height() - 50;

      $(window).resize(function() {
         $scope.editorHight = $(window).height() - 50;
      });

});
