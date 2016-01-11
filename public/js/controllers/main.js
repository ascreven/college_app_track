angular.module('schoolController', [])

    .controller('mainController', function($scope, $http, Schools) {
        $scope.formData = {};

        // when landing on the page, get all schools and show them
        Schools.get()
                .success(function(data) {
                        $scope.schools = data;
                })
                .error(function(data) {
                        console.log('Error: ' + data);
                });

        // when submitting the add form, send the text to the node API
        $scope.createSchool = function() {

          if(!$.isEmptyObject($scope.formData)){
            Schools.create($scope.formData)
            .success(function(data) {
                    $scope.formData = {}; // clear the form so our user is ready to enter another
                    $scope.schools = data;
            })
            .error(function(data) {
                    console.log('Error: ' + data);
            });
          }

        };

        // delete a todo after checking it
        $scope.deleteSchool = function(id) {
                Schools.delete(id)
                        .success(function(data) {
                                $scope.schools = data;
                        })
                        .error(function(data) {
                                console.log('Error: ' + data);
                        });
        };

    })
