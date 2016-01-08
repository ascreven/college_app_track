(function() {

  'use strict';

  angular
  .module('app_track', [
    "ui.router",
    'colleges'
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("home", {
      url: "/",
      template: "I'm in the home template"
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
