(function moviesAppMoviesService() {
    'use strict';

    angular
        .module('moviesApp.movies')
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
        function discoverMovies() {
            return $http.get(API_BASE_URL + 'discover/movie?api_key=' + API_KEY);
        }
    }

})();
