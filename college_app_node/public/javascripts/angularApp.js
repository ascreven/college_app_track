var app = angular.module('app_track', [
  'ui.router'
]);



app.factory('schools', ['$http', function( $http ){
  var o = {
  schools: []
}
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
      controller: 'SchoolsCtrl',
      resolve: {
        school: ['$stateParams', 'schools', function ($stateParams, schools){
          return schools.get($stateParams.id);
        }]
      }
    });
    $urlRouterProvider.otherwise('home');
  }
])
//
// app.factory('schools', ['$http', function($http){
//   var o = {
//     schools: []
//   }
//   console.log(o);
//   o.getAll = function() {
//     console.log('getAll function being called');
//     return $http.get('/colleges').success(function(data){
//       console.log(data);
//       angular.copy(data, o.schools);
//     });
//   };
//   o.create = function(school) {
//     return $http.post('/schools', school).success(function (data) {
//       o.schools.push(data);
//     });
//   };
// }])
//
//
// app.controller('MainCtrl', [
//   '$scope',
//   'schools',
//   function($scope, schools){
//     $scope.schools = schools.schools;
//     console.log($scope.schools);
//     $scope.addSchool = function(){
//       if(!$scope.name || $scope.name === '') { return; }
//       $scope.schools.push({
//         name: $scope.name,
//         link: $scope.link,
//         upvotes: 0,
//         dates: [
//           {author: 'Joe', date: '1/3/13', upvotes: 3, body: "Application due"},
//           {author: 'Mary', date: '1/3/16', upvotes: 2, body: "Registration day"},
//         ]
//       });
//       $scope.name = '';
//       $scope.link = '';
//     };
//     $scope.incrementUpvotes = function(school) {
//       school.upvotes += 1;
//     };
//   }
// ]);
// app.controller('SchoolsCtrl', [
//   '$scope',
//   '$stateParams',
//   'schools',
//   function($scope, $stateParams, schools){
//     $scope.school = schools.schools[$stateParams.id];
//     $scope.addDate = function(){
//       if($scope.body === '' || $scope.date === '') { return; }
//       $scope.school.dates.push({
//         body: $scope.body,
//         author: 'user',
//         date: $scope.date,
//         upvotes: 0
//       });
//       $scope.body = '';
//     };
//   }
// ]);
