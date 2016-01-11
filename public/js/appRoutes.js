// public/js/appRoutes.js
    angular
    .module('appRoutes', [])
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
            controller: 'SchoolController'
        });

    $locationProvider.html5Mode(true);

}]);
