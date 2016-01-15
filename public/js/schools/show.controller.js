(function(){
  'use strict';

  angular
  .module('schools')
  .controller('SchoolShowController', [
    'SchoolFactory',
    '$stateParams',
    '$scope',
    '$state',
    SchoolShowControllerFunction
  ]);

  function SchoolShowControllerFunction(SchoolFactory, $stateParams, $scope, $state){
    // this.school = SchoolFactory.get({id: $stateParams.id});
    $scope.school = SchoolFactory.get({id: $stateParams.id})
    console.log($scope.school)
    $scope.dates = [
      {date: 'post 1', upvotes: 5},
      {date: 'post 2', upvotes: 2},
      {date: 'post 3', upvotes: 15},
      {date: 'post 4', upvotes: 9},
      {date: 'post 5', upvotes: 4}
    ];
    $scope.addPost = function(){
  $scope.dates.push({date: 'A new post!', upvotes: 0});
};
  };

})();
