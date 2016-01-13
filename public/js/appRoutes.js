// public/js/appRoutes.js

(function(){

  'use strict';
    angular
    .module('appRoutes', ['ngRoute'])
    .config([
      '$routeProvider',
      '$locationProvider',
      function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/schools', {
            templateUrl: 'views/school.html',
            controller: 'SchoolController',
            controllerAs: 'SchoolViewModel'
        })

        .when('/signin', {
          templateUrl: 'views/users/signin.html'
        })
        .when('/signup', {
          templateUrl: 'views/users/signup.html'
        })
        .when('/signout', {
          templateUrl: 'views/users/signout.html'
        });

    $locationProvider.html5Mode(true);

}]);
})();
