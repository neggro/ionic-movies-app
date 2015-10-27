(function appHomeController() {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = [
        '$scope',
        '$mdDialog',
        'moviesService',
        'IMAGE_BASE_URL',
        '$stateParams',
        '$mdSidenav'
    ];

    /* @ngInject */
    function HomeController($scope, $mdDialog, moviesService, IMAGE_BASE_URL, $stateParams,
            $mdSidenav) {

        var currentPage = 1;
        var currentTotalPages;
        var currentSelection = 'discover';
        var lastPageLoaded = false;
        var vm = this;
        vm.loading = false;
        vm.movies = [];
        vm.imageDomain = IMAGE_BASE_URL + 'w185';
        vm.displayDialog = displayDialog;

        $scope.$on('loadMovies', function () {

            if (!vm.loading && !lastPageLoaded) {
                activate(currentPage);
                if (currentPage === currentTotalPages) {
                    lastPageLoaded = true;
                }
            }
        });

        activate(currentPage);

        //////////////
        function activate(page) {

            var moviesServicePromise;
            var toPage = page;

            vm.loading = true;

            $mdSidenav('left').close();

            if ($stateParams.id && currentSelection !== $stateParams.id) {
                // reset page
                toPage = 1;
                currentPage = 1;
                currentSelection = $stateParams.id;
            }

            switch ($stateParams.id) {

                case 'popular':
                    moviesServicePromise = moviesService.getPopular(toPage);
                    break;

                case 'top-rated':
                    moviesServicePromise = moviesService.getTopRated(toPage);
                    break;

                case 'now-playing':
                    moviesServicePromise = moviesService.getNowPlaying(toPage);
                    break;

                case 'upcoming':
                    moviesServicePromise = moviesService.getUpcoming(toPage);
                    break;

                default:
                    moviesServicePromise = moviesService.discoverMovies(toPage);
                    break;
            }

            return moviesServicePromise.then(successCallback, errorCallback);

            function successCallback(apiResponse) {

                currentTotalPages = apiResponse.data.total_pages;

                vm.movies = vm.movies.concat(apiResponse.data.results);

                // increment the page only if the current page is lower than the total pages
                if (currentTotalPages && currentPage < currentTotalPages) {
                    currentPage++;
                }

                // load also the 2nd page
                if (toPage === 1 && currentPage !== 1) {
                    activate(currentPage);
                }

                vm.loading = false;

                return vm.movies;
            }

            function errorCallback(err) {
                vm.loading = false;
            }
        }

        function displayDialog(id, ev) {
            $mdDialog.show({
                controller: 'MovieDetailsController',
                controllerAs: 'vm',
                templateUrl: 'app/movies/movie-details.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    movieId: id
                },
                bindToController: true
            });
        }
    }

})();
