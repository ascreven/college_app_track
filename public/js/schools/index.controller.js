(function(){
  'use strict';

  angular
  .module('schools')
  .controller('SchoolIndexController', [
    "SchoolFactory",
    '$scope',
    SchoolIndexControllerFunction
  ]);

  function SchoolIndexControllerFunction(SchoolFactory, $scope){
    this.schools = SchoolFactory.query();
    $scope.schools = SchoolFactory.query();
    console.log($scope.schools)
  }
})();
