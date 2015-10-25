(function appHomeController() {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = [
        '$scope',
        'moviesService',
        'IMAGE_BASE_URL'
    ];

    /* @ngInject */
    function HomeController($scope, moviesService, IMAGE_BASE_URL) {

        var currentPage = 1;
        var vm = this;
        vm.loading = false;
        vm.movies = [];
        vm.imageDomain = IMAGE_BASE_URL;

        $scope.$on('loadMovies', function () {
            !vm.loading && activate(currentPage);
        });

        activate(currentPage);

        //////////////
        function activate(page) {

            vm.loading = true;

            return moviesService.discoverMovies(page)
                .then(successCallback, errorCallback);

            function successCallback(apiResponse) {
                vm.movies = vm.movies.concat(apiResponse.data.results);
                // load also the 2nd page
                currentPage++;
                if (page === 1) {
                    activate(currentPage);
                }
                vm.loading = false;
                return vm.movies;
            }

            function errorCallback(err) {
                vm.loading = false;
            }
        }
    }

})();
