(function(){
  'use strict';
  angular
  .module('schools')
  .factory('SchoolFactory', [
    '$resource',
    FactoryFunction
  ]);

  function FactoryFunction ($resource){
    return $resource('/api/schools/:id',
     {
      // 'get': {method:'GET', isArray:true},
      // 'query': {method:'GET', isArray:true}
    });
    }
})();
