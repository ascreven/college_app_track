(function() {

  'use strict';

  angular
  .module('app_track', [
    "ui.router",
    'home',
    'colleges'
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("home", {
      url: "/home",
      templateUrl: "app/home/home.html",
      controller: 'homeController',
      controllerAs: 'homeViewModel'
    })
    .state("collegesIndex", {
      url: "/colleges",
      templateUrl: "app/colleges/index.html",
      controller: "collegesController",
      controllerAs: "collegesViewModel"
    })
    .state("collegesShow", {
      url: "/colleges/:id",
      templateUrl: "app/colleges/show.html",
      controller: "collegesShowController",
      controllerAs: "collegesShowViewModel"
    });
  }
})();
