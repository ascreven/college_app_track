var app = angular.module('app_track', [
  'ui.router'
]);

app.factory('schools', ['$http', function( $http ){
  var o = {
  schools: []

};
console.log(o)
o.getAll = function(){
  return $http.get('/schools').success(function(data){
    angular.copy(data, o.schools)
  });
}
o.create = function(school){
  return $http.post('/schools', school).success(function(data){
    o.schools.push(data)
  })
}
return o;
}])

app.controller('MainCtrl', [
'$scope',
'schools',
function($scope, schools){
  $scope.schools = schools.schools

$scope.addSchool = function(){
  if(!$scope.name || $scope.name === '') { return; }
  schools.create({
    name: $scope.name,
    link: $scope.link,
    // upvotes: 0,
    // dates: [
    //   {author: 'Joe', date: '1/3/13', upvotes: 3, body: "Application due"},
    //   {author: 'Mary', date: '1/3/16', upvotes: 2, body: "Registration day"},
    // ]
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
  $scope.addDate = function(){
  if($scope.body === '' || $scope.date === '') { return; }
  $scope.school.dates.push({
    body: $scope.body,
    author: 'user',
    date: $scope.date,
    upvotes: 0
  });
  $scope.body = '';
};
}]);
app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl',
      resolve: {
        schoolPromise: ['schools', function( schools ){
          return schools.getAll();
        }]
      }
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
