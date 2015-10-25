(function appMoviesService() {
    'use strict';

    angular
        .module('app.movies')
        .factory('moviesService', moviesService);

    moviesService.$inject = [
        '$http',
        'API_KEY',
        'API_BASE_URL'
    ];

    /* @ngInject */
    function moviesService($http, API_KEY, API_BASE_URL) {
        var service = {
            discoverMovies: discoverMovies
        };
        return service;
        ////////////////
        function discoverMovies(page) {
            return $http.get(API_BASE_URL + 'discover/movie?api_key=' + API_KEY + '&page=' + page);
        }
    }

})();
