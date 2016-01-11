(function(){


  'use strict';

  angular
  .module('home')
  .factory("CollegeFactory", [
    '$resource',
    FactoryFunction
  ]);

  function FactoryFunction( $resource ){
    var colleges = $resource('https://api.data.gov/ed/collegescorecard/v1/schools?api_key=z5IdkiIm0tmyTnGPTXjFsbzrID3gWbjpMcW1Jz2b&school.degrees_awarded.predominant=3,4&school.main_campus=1&school.online_only=0&school.operating=1&_fields=id,school.name,school.city,school.state,school.zip,school.school_url,school.price_calculator_url,2013.student.size&_sort=size:desc');
          colleges.get(function(result){
            console.log(result);
          });
          return colleges;
  }

})();
