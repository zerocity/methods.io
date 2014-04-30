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

      var createNewProtocol = {
         url:'/',
         views:{
              'header':{
                  controller:'NewprotocolCtrl as header',
                  templateUrl:'views/header.html'
               },
               'sidebar':{
                  controller:'NewprotocolCtrl as sidebar',
                  templateUrl:'views/sidebar.html'
               },
               'content':{
                  controller:'NewprotocolCtrl as main',
                  templateUrl:'views/newprotocol.html'
               }
         }

      }

      $stateProvider
         .state('createNewProtocol',createNewProtocol)
         .state('app',{
            url: '/app',
            controller: 'MainCtrl as main',
            views:{
               'header':{
                  controller: 'MainCtrl as main',
                  templateUrl:'views/header.html'
               },
               'sidebar':{
                  controller: 'MainCtrl as main',
                  templateUrl:'views/sidebar.html'
               },
               'content':{
                  controller: 'MainCtrl as main',
                  templateUrl:'views/main.html'
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

      $rootScope.ace  =function(_editor) {
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

      // init editorheight
      $rootScope.editorHight= $(window).height() - 50;
      $(window).resize(function(e) {
         $rootScope.editorHight = $(window).height() - 50;
      });
  }
);
