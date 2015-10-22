(function moviesAppModule() {
    'use strict';

    angular
        .module('moviesApp.core')
        .run(moviesAppRun);

    /* @ngInject */
    function moviesAppRun($ionicPlatform) {

        $ionicPlatform.ready(ionicPlatformReady);

        function ionicPlatformReady() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        }
    }

})();
