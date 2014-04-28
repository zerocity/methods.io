'use strict';

angular.module('methodsioApp')
   .controller('MainCtrl', function ($scope,$rootScope, dummyJson) {
      var main = this
      $rootScope.group='';
      $scope.data = dummyJson.getDummy();

      $scope.getScope = function () {
         console.log('test');
         console.log(main);
         console.log($scope.data.procedure);
      }

      $scope.toggelEditor = function() {
         $('#editor').toggleClass('hide')
         $('#page').toggleClass('fullScreen')
      }

      $scope.leo = function (element,animate) {
         if ($rootScope.group !== element) {
            if ($rootScope.group.length === '') {

               $rootScope.group = element;
               console.log('group', $rootScope.group);

            } else {
               $($rootScope.group).toggleClass(animate)
               $rootScope.group = element;
            }

         $(element).toggleClass(animate)

         }else{
            $rootScope.group = '';
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
            if (typeof $('#page')[0] !== 'undefined') {
               var scrollbarHeight = newHeight();
               var calc = (scrollBarTop / scrollbarHeight) * $('#page')[0].scrollHeight;
               $('#page').scrollTop(calc)
            }
            // it is not posible to scroll to the bottom on the preview ...
         });
      }

      //$scope.md = dummyJson.json2md(dummyJson.getDummy());
      $scope.md = dummyJson.getMirko();
      dummyJson.md2json($scope.md);
});
