

(function(){

  "use strict";


  angular
  .module("schools")
  .directive("dateForm", [
    "SchoolFactory",
    "$state",
    DateFormDirectiveFunction
  ]);

  function DateFormDirectiveFunction(SchoolFactory, $state){
    return{
      templateUrl: "public/views/schools/new.html",
      scope: {
        school: "="
      },
      link: function(scope){
        scope.create = function(){
          scope.school.$save(function(response){
            $state.go("schoolIndex", {}, {reload: true});
          });
        }
        scope.update = function(){
          scope.school.$update({id: scope.school.id}, function(response){
            console.log(response);
          });
        }
        scope.delete = function(){
          scope.school.$delete({id: scope.school.id}, function(){
            $state.go("grumbleIndex", {}, {reload: true});
          });
        }
      }
    }
  }
})();
