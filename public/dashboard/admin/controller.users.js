angular.module('module.dashboard').controller('controller.users', [
    '$scope',
    '$rootScope',
    'factory.api',
    function ($scope, $rootScope, API) {

        var users = this;

        users.payload = {};

        users.template = '/dashboard/admin/users/table.html';

        users.init = function() {
            console.debug('controller.users.initiliazed');

            API.list('users', { populate: 'group' })
                .then(users.list.success, users.list.error);
        };

        users.list = {
            success: function(res) {
                users.data = res.data;
            },
            error: API.debug.error
        };

        users.add = {
            submit: function() {
                API.add('users', users.payload)
                    .then(users.add.success, API.debug.error);
            },
            success: function(res) {
                users.data.push(res.data);
                users.payload = {};
            }
        };

        users.edit = {
            submit: function(user) {
                API.edit('users', user._id, user)
                    .then(users.edit.success, API.debug.error)
            },
            success: function(res) {
                console.debug('user updated successfully', res.data);
            }
        }

        users.delete = {
            submit: function(user) {
                if(confirm('Are you sure that you want to delete this user?')) {
                    var index = users.data.indexOf(user);
                    API.delete('users', user._id)
                        .then(function() {
                            users.data.splice(index,1);
                        }, API.debug.error);
                }
            }
        };
    }
]);
