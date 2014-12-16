/* mobi.ui.momentadapter - v0.0.1 - 2014-12-16 */

angular.module('mobi.ui.momentadapter', [
    'mobi.ui.momentadapter.services'
]);

angular.module('mobi.ui.momentadapter.services', [])
    .factory('moment', function ($window) {
        return $window.moment;
    })

;