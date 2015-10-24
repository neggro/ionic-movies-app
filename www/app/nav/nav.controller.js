(function appNavController() {
    'use strict';

    angular
        .module('app.nav')
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
