(function(){
  angular
  .module("colleges")
  .controller("collegesShowController", [
    "$stateParams",
    CollegesShowControllerFunction
  ]);

  function CollegesShowControllerFunction($stateParams){
    console.log($stateParams)
    this.college = {}
  }
})();
