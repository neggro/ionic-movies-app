(function moviesAppCoreConstants() {
    'use strict';

    angular
        .module('moviesApp.core')

        .constant('API_KEY', '08dcd8a540a8fa2efbcf82dccad0473a')

        .constant('API_BASE_URL', 'http://api.themoviedb.org/3/')

        .constant('IMAGE_BASE_URL', 'http://image.tmdb.org/t/p/w342');

})();
