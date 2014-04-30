'use strict';

angular.module('methodsioApp')
  .controller('ViewstepCtrl', function ($scope,$stateParams,$rootScope,AppDatabase,CreateDB) {
      var viewStep = this;
      var groupId = $stateParams.groupId;
      var stepId = $stateParams.stepId;
      // reset menu
      if (typeof $rootScope.group !== 'undefined') {
         $($rootScope.group).toggleClass('hide');
         $rootScope.group='';
      }

      //AppDatabase.createDummy();
      CreateDB.get('dummy')
         .then(function(doc) {
            _.map(doc.procedure,function(results) {
               //todo groupId and stepId must be a number !! $stateParams give numer in string
               if (results.processGroupId == groupId) {
                  _.map(results.processSteps,function(step) {
                     if (step.processStepId == stepId) {
                        $scope.model = step
                     }
                  });
               }
            });
         }).catch(function(err){
           console.log(err);
         });

});
