angular.module('module.dashboard').controller('controller.groups', [
    '$scope',
    '$rootScope',
    'factory.api',
    function ($scope, $rootScope, API) {

        var groups = this;

        groups.payload = {};

        groups.init = function() {
            console.debug('controller.groups.initiliazed');
            
            API.list('groups')
                .then(groups.list.success, groups.list.error);
        };

        groups.list = {
            success: function(res) {
                $rootScope.enums.groups = res.data;
            },
            error: API.debug.error
        };

        groups.add = {
            submit: function() {
                if( groups.payload.label ) {
                    API.add('groups', groups.payload)
                        .then(groups.add.success, groups.add.error);
                }
            },
            success: function(res) {
                $rootScope.enums.groups.push(res.data);
                groups.payload.label = '';
            },
            error: API.debug.error
        }

        groups.delete = {
            submit: function(group) {
                if(confirm('Are you sure you want to delete this group?')) {
                    var index = $rootScope.enums.groups.indexOf(group);
                    API.delete('groups', group._id)
                        .then(function() {
                            $rootScope.enums.groups.splice(index, 1);
                        }, API.debug.error);
                }
            }
        }
    }
]);
