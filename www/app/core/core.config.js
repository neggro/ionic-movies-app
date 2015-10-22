(function myAppCoreConfig() {
    'use strict';

    angular
        .module('moviesApp.core')
        .config(coreConfig)
        .config(themeConfig);

    coreConfig.$inject = [
        '$urlRouterProvider'
    ];

    /* @ngInject */
    function coreConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }

    /* @ngInject */
    function themeConfig($mdThemingProvider) {

        $mdThemingProvider.theme('default')
            .dark()
            .primaryPalette('grey', {
                'default': '900'
            })
            .accentPalette('deep-purple', {
                'default': '500'
            })
            .warnPalette('red', {
                'default': '300'
            });
    }

})();
