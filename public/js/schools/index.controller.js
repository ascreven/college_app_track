(function(){
  'use strict';

  angular
  .module('schools')
  .controller('SchoolIndexController', [
    "SchoolFactory",
    SchoolIndexControllerFunction
  ]);

  function SchoolIndexControllerFunction(SchoolFactory){
    this.schools = SchoolFactory.query();
  }
})();
