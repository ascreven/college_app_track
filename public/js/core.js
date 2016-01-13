(function(){
  angular
  .module('app_track', [
    'ngRoute',
    'appRoutes',
    'MainCtrl',
    'SchoolCtrl',
    'SchoolService'
  ]);


  function mainController($scope, $http){
    $scope.formData = {};

    $http.get('/api/schools')
    .success(function(data){
      $scope.schools = data;
      console.log(data);
    })
    .error(function(data){
      console.log('Error:' + data);
    });
    $scope.createSchool = function(){
      $http.post('/api/schools', $scope.formData)
      .success(function(data){
        $scope.formData = {};
        $scope.schools = data;
        console.log(data);
      })
      .error(function(data){
        console.log('Error: ' + data);
      });
    };

    $scope.deleteSchool = function(id){
      $http.delete('/api/schools/' + id)
      .success(function(data){
        $scope.schools = data;
        console.log(data);
      })
      .error(function(data){
        console.log('Error: ' + data);
      });
    };
  }
})();
//
//
//
// // (function() {
// //
// //   'use strict';
// //
// //   angular
// //   .module('app_track', [
// //     "ui.router",
// //     'home',
// //     'colleges'
// //   ])
// //   .config([
// //     "$stateProvider",
// //     RouterFunction
// //   ]);
// //
// //   function RouterFunction($stateProvider){
// //     $stateProvider
// //     .state("home", {
// //       url: "/home",
// //       templateUrl: "app/home/home.html",
// //       controller: 'homeController',
// //       controllerAs: 'homeViewModel'
// //     })
// //     .state("collegesIndex", {
// //       url: "/colleges",
// //       templateUrl: "app/colleges/index.html",
// //       controller: "collegesController",
// //       controllerAs: "collegesViewModel"
// //     })
// //     .state("collegesShow", {
// //       url: "/colleges/:id",
// //       templateUrl: "app/colleges/show.html",
// //       controller: "collegesShowController",
// //       controllerAs: "collegesShowViewModel"
// //     });
// //   }
// // })();
