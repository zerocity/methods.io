'use strict';

angular
  .module('methodsioApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'mgcrea.ngStrap',
    'ui.router',
    'ui.ace',
    'pouchdb'
  ])
  .config(function($stateProvider,$urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
         .state('app',{
            url: '/',
            views:{
               'header':{
                  templateUrl:'views/header.html'
               },
               'sidebar':{
                  templateUrl:'views/sidebar.html',
                  controller: 'MainCtrl as main'
               },
               'content':{
                  templateUrl:'views/main.html',
                  controller: 'MainCtrl as main'
               }
            }
      }).state('app.newstep',{
         url: 'new/step',
         views:{
            'content@':{
               templateUrl:'views/newstep.html',
               controller: 'MainCtrl as main'
            }
         }
      }).state('app.newGroup',{
         url:'new/group',
         views:{
            'content@':{
               templateUrl:'views/newgroup.html',
               controller: 'MainCtrl as main'
            }
         }
      }).state('app.viewStep',{
         url: 'step/:groupId/:stepId',
         views:{
            'content@':{
               templateUrl:'views/viewstep.html',
               controller: 'ViewstepCtrl as viewStep'
            }
         }
      });

  }).run(function($rootScope) {
      $rootScope.editorHight= $(window).height() - 50;
      $(window).resize(function(e) {
         $rootScope.editorHight = $(window).height() - 50;
         //console.log(e);
      });
  }
);
