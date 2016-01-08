(function() {

  'use strict';

  angular
  .module('app_track', [
    "ui.router"
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
      templateUrl: "app/colleges/index.html"
    });
  }
})();
