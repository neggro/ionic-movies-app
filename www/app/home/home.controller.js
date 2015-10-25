(function appHomeController() {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = [
        'moviesService',
        'IMAGE_BASE_URL'
    ];

    /* @ngInject */
    function HomeController(moviesService, IMAGE_BASE_URL) {
        var vm = this;
        vm.movies = [];
        vm.imageDomain = IMAGE_BASE_URL;

        activate();

        ////////////////
        function activate() {
            return moviesService.discoverMovies()
                .then(successCallback, errorCallback);

            function successCallback(apiResponse) {
                vm.movies = apiResponse.data.results;
                return vm.movies;
            }

            function errorCallback(err) {}
        }
    }

})();
