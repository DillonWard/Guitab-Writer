angular.module('app',['ngRoute'])
 
 .config(function($routeProvider, $locationProvider){
     
     $routeProvider

     .when('/', {
         templateUrl: 'static/content.html',
         controller: 'mainCtrl',
         controllerAs: 'main',
     })
     .when('/tabview/:id', {
         templateUrl: 'static/tabview.html',
         controller: 'viewtabCtrl',
         controllerAs: 'viewtabctrl',
     })
     
     .otherwise({
         redirectTo: '/'
     });
 })
