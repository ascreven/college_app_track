
angular.module('SchoolService', [])

    // super simple service
    // each function returns a promise object
    .factory('Schools', ['$http', function($http) {
        return {
            get : function() {
                return $http.get('/api/schools');
            },
            create : function(schoolData) {
                return $http.post('/api/schools', schoolData);
            },
            delete : function(id) {
                return $http.delete('/api/schools/' + id);
            }
        };
    }]);
