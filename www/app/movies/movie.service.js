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
            discoverMovies: discoverMovies,
            getMovieById: getMovieById,
            getPopular: getPopular,
            getTopRated: getTopRated,
            getNowPlaying: getNowPlaying,
            getUpcoming: getUpcoming
        };

        return service;

        ////////////////
        function discoverMovies(page) {
            return $http.get(API_BASE_URL + 'discover/movie?api_key=' + API_KEY + '&page=' + page);
        }

        function getMovieById(id) {
            return $http.get(API_BASE_URL + 'movie/' + id + '?api_key=' + API_KEY);
        }

        function getPopular(page) {
            return $http.get(API_BASE_URL + 'movie/popular?api_key=' + API_KEY + '&page=' + page);
        }

        function getTopRated(page) {
            return $http.get(API_BASE_URL + 'movie/top_rated?api_key=' + API_KEY + '&page=' + page);
        }

        function getNowPlaying(page) {
            return $http.get(API_BASE_URL + 'movie/now_playing?api_key=' + API_KEY + '&page=' +
                page);
        }

        function getUpcoming(page) {
            return $http.get(API_BASE_URL + 'movie/upcoming?api_key=' + API_KEY + '&page=' + page);
        }
    }

})();
