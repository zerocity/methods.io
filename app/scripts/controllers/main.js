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


      var config = {
         value: $scope.md,
         lineNumbers: true,
         mode: "text/x-gfm",
         theme: "ambiance"
      };

      var editor = CodeMirror(document.getElementById("editor"), config);

      console.log(editor);

/*      var myCodeMirror = CodeMirror(document.getElementById('editor'), {

      });

      myCodeMirror.setOption()


        theme: "monokai",
        mode:  "text/x-markdown"
      console.log(myCodeMirror);
      console.log(myCodeMirror.modes);*/



});
