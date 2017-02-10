if( window.name !== 'debug' ) {
    console.debug = function(){};
} else {
    window.debug = true;
}

angular.module('module.dashboard', [
    'ngRoute',
    'ngMap',
    'ngFileUpload',
    'ngError',
    'ui.bootstrap',
    'ngTouch',
    'ngSanitize'
]).config([
    '$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/dashboard/html/jobs/index.html',
                controller: 'controller.jobs as jobs'
            })
            .when('/job/:id', {
                templateUrl: '/dashboard/html/job/index.html'
            })
            .when('/job/:id/scope/:id', {
                templateUrl: '/dashboard/html/job/index.html'
            })
            .when('/settings', {
                templateUrl: '/dashboard/html/settings.html',
                controller: 'controller.settings as settings'
            })
            .when('/overview/:id',{
              templateUrl: '/dashboard/html/job/overview.html',
              // controller: 'controller.overview as overview'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
])
//add filters here
