angular.module('module.dashboard').controller('controller.notes', [
    '$scope',
    '$rootScope',
    '$routeParams',
    'factory.api',
    function($scope, $rootScope, $routeParams, API) {
        var notes = this;

        notes.payload = {};
        notes.entity = {};
        notes.template = '/dashboard/html/widgets/notes.html';

        notes.title = '';

        notes.init = function(e, entity, id) {
            notes.entity.type = entity;
            notes.entity.id = id;
            notes.payload[notes.entity.type] = notes.entity.id;

            var params = {
                populate: 'user',
                scope: $rootScope.active.scope._id
            };

            if( entity !== 'scope' ) {
                params[entity] = id;
                notes.title = entity;
            } else {
                notes.title = 'job';
            }


            // console.debug('controller.notes.initiliazing', params);

            API.list('notes', params)
                .then(notes.list.success, API.debug.error);
        };

        notes.list = {
            success: function(res) {
                notes.data = res.data;
            }
        };

        notes.add = {
            submit: function() {
                if( notes.payload.text ) {
                    API.add('notes', notes.payload)
                        .then(notes.add.success, API.debug.error);
                }
            },
            success: function(res) {
                console.debug('Created note for:', notes.entity, res.data);
                notes.payload.text = '';
                notes.data.push(res.data);
                return $panel-body.animate({ scrollTop: $panel-body.prop('scrollHeight') }, 300);
            }
        };

        notes.delete = {
            submit: function(note) {
                if (confirm('Are you sure you want to delete this note?')) {
                    API.delete('notes', note._id).then(function() {
                        notes.data.splice(notes.data.indexOf(note), 1);
                    }, API.debug.error);
                }
            }
        };


        $scope.$on('change.active', notes.init);

        if( window.debug ) {
            window.notes = notes;
        }
    }
]);
