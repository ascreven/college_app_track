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
    $scope.schools = [
      {"name":"Northern Arizona University","photo":"https://upload.wikimedia.org/wikipedia/en/a/a0/NAU_Seal.png","url":"nau.edu/","date": '1/25/2016'},
      {"name":"University of Arizona","photo":"https://upload.wikimedia.org/wikipedia/en/thumb/4/43/University_of_Arizona_Seal.svg/1059px-University_of_Arizona_Seal.svg.png","url":"http://www.arizona.edu/","date": '1/26/2016'},
      {"name":"University of Michigan","photo":"https://upload.wikimedia.org/wikipedia/en/b/b8/Umichigan_color_seal.png","url":"https://www.umich.edu/","date": '1/27/2016'},
      {"name":"Arizona State University","photo":"https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Arizona_State_University_seal.svg/1024px-Arizona_State_University_seal.svg.png","url":"http://www.asu.edu/","date": '1/28/2016'}
]

$scope.addSchool = function(){
  $scope.schools.push({"name": $scope.name ,"photo": $scope.photo,"url": $scope.url,"date": '1/28/2016'});
};
  }
})();
