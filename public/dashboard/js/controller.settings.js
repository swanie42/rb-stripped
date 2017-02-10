angular.module('module.dashboard')
    .controller('controller.settings', [
        '$scope',
        '$rootScope',
        'factory.api',
        function ($scope, $rootScope, API) {
            console.debug('controller.settings.initiliazed');
            $rootScope.active = {};
            $rootScope.state.title = 'Settings';

            var settings = this;

            settings.payload = {
                name: $rootScope.session.name,
                email: $rootScope.session.email
            };

            settings.alert = {};
            settings.valid = {};
            settings.verify = {};

            settings.validate = {
                password: function() {
                    settings.valid.password = (
                        settings.payload.password &&
                        settings.verify.password &&
                        settings.payload.password === settings.verify.password
                    );
                }
            };

            settings.edit = {
                submit: function() {
                    API.edit('users', $rootScope.session._id, settings.payload)
                        .then(settings.edit.success, settings.edit.error);
                },
                success: function(res) {
                    console.log('controller.settings.edit.success:', res.data);
                },
                error: API.debug.error
            }

            $scope.$watch('settings.verify.password', settings.validate.password);
            $scope.$watch('settings.payload.password', settings.validate.password);

            if( window.debug ) {
                window.settings = settings;
            }
        }
    ]);
