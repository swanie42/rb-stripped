angular.module('module.dashboard')
    .controller('controller.jobs', [
        '$rootScope',
        'factory.api',
        function ($rootScope, API) {
            console.debug('controller.jobs.list.initiliazed');

            var jobs = this;

            jobs.defaultImg = '//placehold.it/600x400';
            jobs.inputs = {};

            jobs.filters = {

                pc: function(job) {
                    return jobs.inputs.pc ? (job.pc === jobs.inputs.pc):true;
                },
                status: function(job) {
                    return jobs.inputs.status ? (job.status === jobs.inputs.status):true;
                }
            };

            jobs.init = function() {
                $rootScope.state.title = 'All Jobs';
                API.list('jobs').then(jobs.get.success, jobs.get.error);
            };

            jobs.get = {
                success: function(res) {
                    jobs.data = res.data;
                },
                error: function(err) {
                    console.error(err);
                }
            };

            jobs.imgError = function(job) {
                job.img = jobs.defaultImg;
            }

            if(window.debug) {
                window.jobs = jobs;
            }
        }
    ]);
