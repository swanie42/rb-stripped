angular.module('module.auth', []).controller('module.auth.controller', [
    '$http',
    function ($http) {
        console.info("Auth.controller:loaded");

        var auth = this,
            alertError = ['alert','alert-danger'];

        auth.payload = {};

        auth.login = {
            submit: function($event) {
                // console.debug('auth.login.submit');
                $http.post('/login', auth.payload)
                    .then(auth.login.success, auth.login.error);
            },
            success: function(res) {

                // console.debug('auth.login.success');
                location.href = "/dashboard";
            },
            error: function(err) {
                console.error('auth.login.error');
                auth.login.alert = alertError;
                auth.login.message = err.data && err.data.message || 'Login failed!';
            }
        };
        auth.register = {
            submit: function($event) {
                $http.post('/register', auth.payload)
                    .then(auth.register.success, auth.register.error);
            },
            success: function(res) {
                // console.debug('auth.register.success');
                location.href = "/dashboard";
            },
            error: function(err) {
                console.error('Register:error', err);
                auth.register.alert = alertError;
                auth.register.message = err.data && err.data.message || 'Registration failed!';
            }
        };
    }]);
