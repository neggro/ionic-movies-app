(function appMovieDetailsController() {
    'use strict';

    angular
        .module('app.movies')
        .controller('MovieDetailsController', MovieDetailsController);

    MovieDetailsController.$inject = [
        '$mdDialog',
        'moviesService',
        'IMAGE_BASE_URL'
    ];

    /* @ngInject */
    function MovieDetailsController($mdDialog, moviesService, IMAGE_BASE_URL) {

        var vm = this;
        vm.imageDomain = IMAGE_BASE_URL + 'w780';
        vm.loading = false;
        vm.hideDialog = hideDialog;
        vm.movie = {};

        activate();

        ////////////////
        function activate() {

            vm.loading = true;

            return moviesService.getMovieById(vm.movieId)
                .then(successCallback, errorCallback);

            function successCallback(responseData) {
                vm.movie = responseData.data;
                vm.loading = false;
                // console.log(vm.movie);
                return vm.movie;
            }

            function errorCallback(err) {
                vm.loading = false;
            }
        }

        function hideDialog() {
            $mdDialog.hide();
        }
    }

})();
