angular.module('module.dashboard').controller('controller.images', [
    '$scope',
    '$rootScope',
    'factory.api',
    'factory.modal',

    function($scope, $rootScope, API, Modal) {
        var images = this;

        images.template = '/dashboard/html/widgets/images.html';
        images.title = '';

        images.init = function(entity) {

            console.log("running images.init")
            console.log($rootScope.active[entity])

            images.title = entity + " Images";
            $rootScope.active.img = $rootScope.active[entity].img;
        };

        images.toggle = {
            collapsed: false,
            collapse: function() {
                images.collapsed = !images.collapsed;
            }
        };

        images.modal = function() {
            Modal.open({
                template: 'slides',
                class: ['wide', 'dark-back'],
                entity: $rootScope.active.entity
            });
        }

    }
]);
