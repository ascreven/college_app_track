(function(){
  'use strict';
  angular
  .module('schools')
  .factory('SchoolFactory', [
    '$resource',
    FactoryFunction
  ]);

  function FactoryFunction ($resource){
    return $resource('/api/schools');
    }
})();
