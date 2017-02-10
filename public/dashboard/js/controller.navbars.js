angular.module('module.dashboard').controller('controller.navbars', [
    '$rootScope',
    '$routeParams',
    'factory.modal',
    'factory.api',
    function($rootScope, $routeParams, Modal, API) {
        var navbars = this;

        navbars.template = '/dashboard/html/job/navbars.html';

        navbars.init = function() {
            console.debug('controller.navbars.initiliazing');
            navbars.select('job');
        };

        navbars.select = function(entity, row) {
            $rootScope.active.entity = entity;

            switch (entity) {
                case 'job':
                    $rootScope.active.zone = null;
                    $rootScope.active.area = null;
                    $rootScope.active.template = 'scopes';

                    API.list('zones', { job: $routeParams.id })
                        .then(navbars.list.zones.success, navbars.list.zones.error);
                break;
                case 'zones':
                    $rootScope.active.zone = row;
                    $rootScope.active.area = null;
                    $rootScope.active.template = 'zone';

                    API.list('areas', { zone: row._id })
                        .then(navbars.list.areas.success, navbars.list.areas.error);

                    $rootScope.$broadcast('change.active', 'zone', $rootScope.active.zone._id);
                break;
                case 'areas':
                    $rootScope.active.area = row;
                    $rootScope.active.template = 'area';
                    $rootScope.$broadcast('change.active', 'area', $rootScope.active.area._id);
                break;
            }
        };

        navbars.list = {
            areas: {
                success: function(res) {
                    $rootScope.active.areas = res.data;
                },
                error: API.debug.error
            },
            zones: {
                success: function(res) {
                    $rootScope.active.zones = res.data;
                },
                error: API.debug.error
            }
        };

        navbars.modals = {
            zones: function() {
                Modal.open({
                    title: 'Edit Zones',
                    template: 'zone',
                    class: ['small','scroll']
                });
            },
            areas: function() {
                Modal.open({
                    title: 'Edit Areas',
                    template: 'area',
                    class: ['small','scroll']
                });
            }
        };
    }
]);
