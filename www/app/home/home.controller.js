(function moviesAppHomeController() {
    'use strict';

    angular
        .module('moviesApp.home')
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
                .then(function successCallback(apiResponse) {
                    vm.movies = apiResponse.data.results;
                    console.log(apiResponse.data.results);
                    return vm.movies;
                }, function errorCallback(err) {

                });
        }
    }

})();
