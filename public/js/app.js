(function(){
  'use strict';

  angular
  .module('app_track', [
    'ui.router',
    'schools'
  ])
  .config([
    '$stateProvider',
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state('/', {
      url: '/',
      templateUrl: 'index.html'
    })
    .state('schoolIndex', {
      url: '/schools',
      templateUrl: 'views/schools/index.html',
      controller: 'SchoolIndexController',
      controllerAs: 'SchoolIndexViewModel'
    })
    .state('schoolShow', {
      url: '/schools/:id',
      templateUrl: 'views/schools/show.html',
      controller: 'SchoolShowController',
      controllerAs: 'SchoolShowViewModel'
    })
    .state('dateCreate', {
      url: '/school/:id/adddate',
      templateUrl: 'views/schools/new.html',
      controller: "DateCreateController",
      controllerAs: 'DateCreateViewModel'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/users/login.html'
    });
  }
})();
