
angular.module('schoolService', [])

    // super simple service
    // each function returns a promise object
    .factory('Schools', function($http) {
        return {
            get : function() {
                return $http.get('/api/schools');
            },
            create : function(todoData) {
                return $http.post('/api/schools', schoolData);
            },
            delete : function(id) {
                return $http.delete('/api/schools/' + id);
            }
        }
    });
