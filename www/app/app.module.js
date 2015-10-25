(function appModule() {
    'use strict';

    angular
        .module('app', [
            /* Shared modules */
            'app.core',

            /* Feature areas */
            'app.nav',
            'app.movies',
            'app.home'
        ]);

})();
