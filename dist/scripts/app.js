(function() {
     function config($stateProvider, $locationProvider) {
         $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
         
         $stateProvider
         .state('index', {
             url: '/',
             templateUrl: '/templates/index.html'
         })
         .state('worktimer', {
             url: '/worktimer',
             controller: 'SessionCtrl as session',
             templateUrl: '/templates/worktimer.html'
         });
     }


angular
         .module('pomotimer', ['ui.router'])
         .config(config);
 })();