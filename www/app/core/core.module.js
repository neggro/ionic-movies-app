(function() {
    'use strict';

    angular
        .module('moviesApp.core', [
            'ui.router',
            'moviesApp.nav',
            'moviesApp.movies',
            'moviesApp.home'
        ]);

})();
