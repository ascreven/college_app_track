(function(){
  'use strict';

  angular
  .module('schools')
  .controller('SchoolShowController', [
    'SchoolFactory',
    '$stateParams',
    '$scope',
    SchoolShowControllerFunction
  ]);

  function SchoolShowControllerFunction(SchoolFactory, $stateParams, $scope){
    this.school = SchoolFactory.get({id: $stateParams.id});
    console.log($scope)
  };

})();
