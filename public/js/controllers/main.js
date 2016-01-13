// angular.module('MainCtrl', [])
//
//     .controller('MainController', function($scope, $http, Schools) {
//         $scope.formData = {};
//
//         // when landing on the page, get all schools and show them
//         Schools.get()
//                 .success(function(data) {
//                         $scope.schools = data;
//                 })
//                 .error(function(data) {
//                         console.log('Error: ' + data);
//                 });
//
//         // when submitting the add form, send the text to the node API
//         $scope.createSchool = function() {
//
//           if(!$.isEmptyObject($scope.formData)){
//             Schools.create($scope.formData)
//             .success(function(data) {
//                     $scope.formData = {}; // clear the form so our user is ready to enter another
//                     $scope.schools = data;
//             })
//             .error(function(data) {
//                     console.log('Error: ' + data);
//             });
//           }
//
//         };
//
//         // delete a todo after checking it
//         $scope.deleteSchool = function(id) {
//                 Schools.delete(id)
//                         .success(function(data) {
//                                 $scope.schools = data;
//                         })
//                         .error(function(data) {
//                                 console.log('Error: ' + data);
//                         });
//         };
//
//     })


// public/core.js
var scotchSchool = angular.module('MainCtrl', []);

function mainController($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all todos and show them
    $http.get('/api/schools')
        .success(function(data) {
            $scope.schools = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createSchool = function() {
        $http.post('/api/schools', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.schools = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
}
