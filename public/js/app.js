var app = angular.module('app_track', []);

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
  $scope.schools = [
    {name: 'post 1', upvotes: 5},
    {name: 'post 2', upvotes: 2},
    {name: 'post 3', upvotes: 15},
    {name: 'post 4', upvotes: 9},
    {name: 'post 5', upvotes: 4}
];
$scope.addSchool = function(){
  if(!$scope.name || $scope.name === '') { return; }
  $scope.schools.push({
    name: $scope.name,
    link: $scope.link,
    upvotes: 0
  });
  $scope.name = '';
  $scope.link = '';

};
$scope.incrementUpvotes = function(school) {
  school.upvotes += 1;
};
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
