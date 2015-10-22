(function moviesAppNavController() {
    'use strict';

    angular
        .module('moviesApp.nav')
        .controller('NavController', NavController);

    NavController.$inject = [
        '$mdSidenav'
    ];

    /* @ngInject */
    function NavController($mdSidenav) {
        var vm = this;
        vm.sideNavToggle = sideNavToggle;

        function sideNavToggle() {
            $mdSidenav('left').toggle();
        }
    }

})();
