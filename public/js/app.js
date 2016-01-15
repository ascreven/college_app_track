var app = angular.module('app_track', [
  'ui.router'
]);

app.factory('schools', [function(){
  var o = {
  schools: []
};
return o;
}])

app.controller('MainCtrl', [
'$scope',
'schools',
function($scope, schools){
  $scope.schools = schools.schools

$scope.addSchool = function(){
  if(!$scope.name || $scope.name === '') { return; }
  $scope.schools.push({
    name: $scope.name,
    link: $scope.link,
    upvotes: 0,
    dates: [
      {author: 'Joe', date: '1/3/13', upvotes: 3},
      {author: 'Mary', date: '1/3/16', upvotes: 2},
    ]
  });
  $scope.name = '';
  $scope.link = '';

};
$scope.incrementUpvotes = function(school) {
  school.upvotes += 1;
};
}]);
app.controller('SchoolsCtrl', [
'$scope',
'$stateParams',
'schools',
function($scope, $stateParams, schools){
  $scope.school = schools.schools[$stateParams.id];
}]);
app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    .state('schools', {
      url: '/schools/{id}',
      templateUrl: '/schools.html',
      controller: 'SchoolsCtrl'
    });



  $urlRouterProvider.otherwise('home');
}]);


// (function(){
//   'use strict';
//
//   angular
//   .module('app_track', [
//     'ui.router',
//     'schools'
//   ])
//   .config([
//     '$stateProvider',
//     RouterFunction
//   ]);
//
//   function RouterFunction($stateProvider){
//     $stateProvider
//     .state('/', {
//       url: '/',
//       templateUrl: 'index.html'
//     })
//     .state('schoolIndex', {
//       url: '/schools',
//       templateUrl: 'views/schools/index.html',
//       controller: 'SchoolIndexController',
//       controllerAs: 'SchoolIndexViewModel'
//     })
//     .state('schoolShow', {
//       url: '/schools/:id',
//       templateUrl: 'views/schools/show.html',
//       controller: 'SchoolShowController',
//       controllerAs: 'SchoolShowViewModel'
//     })
//     .state('dateCreate', {
//       url: '/school/:id/adddate',
//       templateUrl: 'views/schools/new.html',
//       controller: "DateCreateController",
//       controllerAs: 'DateCreateViewModel'
//     })
//     .state('login', {
//       url: '/login',
//       templateUrl: 'views/users/login.html'
//     });
//   }
// })();
