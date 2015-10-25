(function appHomeConfig() {
    'use strict';

    angular
        .module('app.home')
        .config(homeConfig);

    homeConfig.$inject = [
        '$stateProvider'
    ];

    /* @ngInject */
    function homeConfig($stateProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .state('latest', {
                url: '/',
                templateUrl: 'app/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            });
    }

})();
