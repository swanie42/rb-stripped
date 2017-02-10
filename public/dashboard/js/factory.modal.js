angular.module('module.dashboard').factory('factory.modal', [
    '$rootScope',
    '$timeout',
    function ($rootScope, $timeout) {
        var Modal = {
            selector: '#modal',
            state: {
                title: '',
                template: '',
                entity: '',
                message: {
                    class: 'fade',
                    text: ''
                }
            },
            init: function(selector) {
                Modal.selector = selector;
            },
            open: function(options) {
                Modal.reset.all();
                Modal.state.template = '/dashboard/html/modals/'+ options.template +'.html';
                Modal.state.title = options.title || '';
                Modal.state.entity = options.entity || '';
                Modal.state.class = options.class || '';

                console.debug('Modal.open.state:', Modal.state);

                $(Modal.selector).modal('toggle');
            },
            close: function(options) {
                console.debug('Modal.close');
                $timeout(Modal.hide, options.delay||0, true, options);
            },
            hide: function(options) {
                $(Modal.selector).modal('hide');

                if(options.goBack) {
                    $timeout(history.back, 500);
                }
                if(options.callback) {
                    callback();
                }
            },
            reset: {
                notify: function() {
                    Modal.state.message.text = '';
                    Modal.state.message.status = 'fade';
                },
                all: function() {
                    Modal.reset.notify();
                    Modal.state.template = '';
                }
            },
            notify: function(options) {
                Modal.state.message.text = options.text;
                Modal.state.message.status = options.status;

                $timeout(Modal.reset.notify, 2000);
            }
        };

        if( window.debug ) {
            window.Modal = Modal;
        }

        $rootScope.modal = Modal.state;

        return Modal;
    }
]);
