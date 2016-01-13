(function(){
  'use strict';

  angular
  .module('schools')
  .controller('SchoolShowController', [
    'SchoolFactory',
    '$stateParams',
    SchoolShowControllerFunction
  ]);

  function SchoolShowControllerFunction(SchoolFactory, $stateParams){
    this.school = SchoolFactory.get({id: $stateParams.id});
    console.log(this.school)
  }
})();
