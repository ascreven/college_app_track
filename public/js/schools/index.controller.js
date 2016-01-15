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

    // $scope.schools = SchoolFactory.query();
    $scope.schools = SchoolFactory.schools
    console.log($scope.schools)

$scope.addSchool = function(){
  if(!$scope.name || $scope.name === '' || !$scope.photo || $scope.photo === "" || !$scope.url || $scope.url === '') { return; }
  $scope.schools.push({"name": $scope.name ,"photo": $scope.photo,"url": $scope.url});
  $scope.name= '';
  $scope.photo = "";
  $scope.url = "";

};
$scope.addDate = function(school) {
  $scope.school = this.school
  $scope.date = this.school.date
  console.log($scope.date)
  console.log($scope.school)
  $('button').click(function(){
       console.log(this)
   })
};
  }
})();
