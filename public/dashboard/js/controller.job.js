angular.module('module.dashboard').controller('controller.job', [
    '$rootScope',
    '$routeParams',
    'factory.modal',
    'factory.api',
    function($rootScope, $routeParams, Modal, API) {
        var job = this;

        job.payload = {};
        job.enums = API.enums.job;

        job.init = function() {
            console.debug('controller.job.initiliazing', $routeParams);

            API.get('jobs', $routeParams.id)
                .then(job.get.success, job.get.error);
        };

        job.get = {
            success: function(res) {
                $rootScope.active.job = res.data;
                $rootScope.state.title = res.data.name;

                console.debug('controller.job.get.success:', res.data);

                API.list('scopes', { job: $routeParams.id })
                    .then(job.scope.get.success, job.scope.get.error);
            },
            error: API.debug.error
        };

        job.scope = {
            payload: {},
            get: {
                success: function(res) {
                    $rootScope.active.scopes = res.data;
                    $rootScope.active.scope = res.data[0];
                },
                error: API.debug.error
            },
            add: {
                submit: function() {
                    job.scope.payload.job = $routeParams.id;

                    API.add('scopes', job.scope.payload)
                        .then(job.scope.add.success, job.scope.add.error)
                },
                success: function(res) {
                    $rootScope.active.scopes.push(res.data);
                },
                error: API.debug.error
            },
            edit: {
                submit: function(scope) {
                    API.edit('scopes', scope._id, scope)
                        .then(job.scope.edit.success, job.scope.edit.error);
                },
                success: function(res) {
                    console.debug('controller.job.scope.edit.success:', res.data);
                },
                error: API.debug.error
            },
            change: function() {
                $rootScope.$broadcast('change.active', 'scope', $rootScope.active.scope._id);
            }
        };

        job.modals = {
            edit: function() {
                Modal.open({
                    title: 'Job Details',
                    template: 'job',
                    class: 'scroll',
                    entity: 'jobs'
                });

                job.payload = $rootScope.active.job;

                console.debug('controller.job.paylod:', job.payload);
            },
            scope: function() {
                Modal.open({
                    title: 'Job Scopes',
                    template: 'scope',
                    class: 'scroll',
                    entity: 'scopes'
                });
            }
        };

        job.edit = {
            submit: function() {
                API.edit('jobs',$routeParams.id, job.payload)
                    .then(job.edit.success,job.edit.error);
            },
            success: function(res) {
                $rootScope.state.title = res.data.name;

                Modal.notify({
                    text: 'Job updated successfully!',
                    status: 'alert-success'
                });
            },
            error: API.debug.error
        };

        job.details = {
            in: false,
            toggle: function() {
                job.details.in = !job.details.in;
            }
        };

        job.activities = {
            in: false,
            toggle: function() {
                job.activities.in = !job.activities.in;
            }
        };

        job.notes = {
            in: false,
            toggle: function() {
                job.notes.in = !job.notes.in;
            }
        };

        if( window.debug ) {
            window.job = job;
        }
    }
]);
