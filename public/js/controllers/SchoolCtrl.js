angular
.module('SchoolCtrl', [])
.controller('SchoolController', function($scope) {
    this.schools = [
      "test",
      "plese work"
    ]
    $scope.tagline = 'Nothing beats a pocket protector!';

});
