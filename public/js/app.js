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
    });
  }
})();
