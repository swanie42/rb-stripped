angular.module('module.dashboard')
    .controller('controller.app', [
        '$rootScope',
        'factory.api',
        function($rootScope, API) {
            console.debug('controller.app.initiliazed');

            var app = this;

            $rootScope.state = {};
            $rootScope.active = {};
            $rootScope.enums = {};

            

            app.back = function() {
                // app.reset();
                $rootScope.active = {};
                history.back();
            };

            // app.reset = function() {};

            app.enum = function(entity, category, params) {
                API.list(entity, params).then(function(res) {
                    if (category) {
                        $rootScope.enums[category][entity] = res.data;
                    } else {
                        $rootScope.enums[entity] = res.data;
                    }
                }, API.debug.error);
            };

            app.session = {
                get: function() {
                    API.session().then(app.session.success, app.session.error);
                },
                success: function(res) {
                    $rootScope.session = res.data;
                    console.debug('Saved session:', $rootScope.session);
                },
                error: function() {
                    console.error('Could not get session!');
                    $timeout(app.logout, 2000);
                }
            };

            app.logout = function() {
                location.href = '/logout';
            };

            app.utils = {
                calculate: {
                    sqft: function(list, color) {

                        var totalSqFt = list.reduce(app.utils.calculate.sumSqft, 0);

                        if (color) {

                            if ($rootScope.active.zone.sqft === totalSqFt) {
                                return color = 'green'
                            }
                            else if($rootScope.active.zone.sqft > totalSqFt){
                              return color = 'yellow'
                            }
                             else {
                                return color = 'red'
                            }
                        }
                        return totalSqFt;


                    },
                    sumSqft: function(total, element) {
                        return total += element.sqft;
                    }
                }
            };

            if (window.debug) {
                window.app = this;
                window.root = $rootScope;
            }
        }
    ]);
