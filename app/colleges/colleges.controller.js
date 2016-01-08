(function(){

'use strict';
angular
  .module("colleges", [
    "ngResource"
  ])
  .controller("collegesController", function(){
  this.colleges = [
    "Walk the dog",
    "Buy groceries",
    "Drink coffee",
    "Wake up like this"
  ];
});
})();
