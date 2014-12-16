angular.module('mobi.ui.momentadapter.services', [])
    .factory('moment', function ($window) {
        return $window.moment;
    })

;