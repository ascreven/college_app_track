(function(){
  angular
  .module('home')
  .controller('homeController', [
    "CollegeFactory",
    HomeControllerFunction
  ]);
  function HomeControllerFunction( CollegeFactory ){
    this.colleges = CollegeFactory.get();
    console.log(CollegeFactory.get());
  }
})();
