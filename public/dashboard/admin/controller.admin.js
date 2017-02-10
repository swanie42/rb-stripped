angular.module('module.dashboard').controller('controller.admin', [
    '$scope',
    '$rootScope',
    'factory.api',
    function ($scope, $rootScope, API) {
        console.debug('controller.admin.initiliazed');

        var admin = this;

        admin.template = '/dashboard/admin/index.html';
    }
]);
