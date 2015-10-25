(function appHomeLoadOnScrollDirective() {
    'use strict';

    angular
        .module('app.home')
        .directive('loadOnScroll', loadOnScroll);

    function loadOnScroll() {

        return {
            restrict: 'A',
            link: link
        };

        function link(scope, element, attrs) {

            var htmlElement = element[0];

            element.on('scroll', function (e) {

                var contentHeight = htmlElement.offsetHeight;
                var contentScrollHeight = htmlElement.scrollHeight;
                var scrollLimit = contentScrollHeight - 50;
                var currentScrollPosition = contentHeight + this.scrollTop;

                if (currentScrollPosition > scrollLimit) {
                    scope.$broadcast('loadMovies');
                }
            });
        }
    }

})();
