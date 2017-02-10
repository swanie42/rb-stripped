angular.module('module.dashboard')
    .filter('reverse', function() {
        return function(input) {
            return function(item) {
                return item;
            }
            // console.log("the input: ", input)
            //   return input.label == "Clean";
            // return input.toUpperCase();
        };
    });

angular.module('module.dashboard')
    .controller('controller.details', [
        '$routeParams',
        '$timeout',
        'factory.dashboard',
        'factory.api',
        function($routeParams, $timeout, Dashboard, API) {
            console.debug('controller.details.initiliazed:', $routeParams);

            Dashboard.state.container = 'container';

            // details attributes
            var details = this;

            details.data = API.data;
            details.debug = {
                enabled: $routeParams.debug,
                args: function() {
                    console.debug(arguments);
                },
                error: function(err) {
                    console.error(err);
                }
            };

            // details controller methods
            details.init = function() {
                details.entity = 'job';
                details.active = {
                    template: details.entity,
                    job: {},
                    zone: {},
                    area: {}
                };
                API.get('jobs', $routeParams.jobId).then(
                    details.job.get.success,
                    details.job.get.error
                );
            };

            details.select = function(entity, row) {
                details.entity = entity;
                details.active.template = entity;

                switch (entity) {
                    case 'job':
                    details.active.zone = null;
                    details.active.area = null;
                    break;
                    case 'zone':
                    details.active.zone = row;
                    details.zones.populate.forEach(function(field, index) {
                        if(!details.active.zone[field]){
                            details.active.zone[field]=[];
                        }
                    });
                    details.active.area = null;
                    case 'area':
                    details.active.area = row;
                    details.areas.populate.forEach(function(field, index) {
                        if(!details.active.zone[field]){
                            details.active.zone[field]=[];
                        }
                    });
                    break;
                }
            };

            details.job = {
                payload: {},
                populate:['activities','images','notes','zones'],
                get: {
                    success: function(res) {
                        Dashboard.state.title = res.data.name;
                        details.active.job = res.data;

                        details.job.populate.forEach(function(field, index) {
                            if(!details.active.job[field]){
                                details.active.job[field]=[];
                            }
                        });

                        console.debug('controller.details.job.get.success:', res.data);
                    },
                    error: details.debug.error
                },
                delete: {
                    submit: function() {
                        if( confirm('Are you sure that you want to delete this job?') ) {
                            API.delete('jobs', $routeParams.jobId).then(
                                details.job.delete.success,
                                details.job.delete.error
                            );
                        }
                    },
                    success: function() {
                        Dashboard.modal.notify({
                            text: 'Deletion successful.',
                            status: 'alert-success'
                        });
                        Dashboard.modal.close({
                            delay: 1250,
                            goBack: true
                        });
                    },
                    error: function(err) {
                        console.error(err);

                        Dashboard.modal.notify({
                            text: 'Deletion failed',
                            status: 'alert-danger'
                        });
                        Dashboard.modal.close({
                            delay: 1500
                        });
                    }
                },
                edit: {
                    modal: function() {
                        details.job.payload = details.active.job;

                        Dashboard.modal.open({
                            title: 'Edit Job',
                            template: 'job',
                            class: 'scroll',
                            data: { entity: 'jobs' }
                        });
                    },
                    toggle: function() {
                        details.job.edit.enabled = !details.job.edit.enabled;
                    },
                    submit: function() {
                        API.edit(
                            'jobs',
                            $routeParams.jobId,
                            details.job.payload
                        ).then(
                            details.job.edit.success,
                            details.job.edit.error
                        );
                    },
                    success: function(res) {
                        res.data;
                        Dashboard.modal.notify({
                            text: 'Activity added successfully.',
                            status: 'alert-success'
                        });
                    },
                    error: details.debug.error
                },
                /*
                columns: {
                    disabled: ['_id', '__v', 'img', 'images', 'notes', 'zones', 'areas', 'activities', 'created'],
                    hide: function(key) {
                        return details.job.columns.disabled.indexOf(key) === -1;
                    },
                    display: function(key) {
                        if (!API.columns.job[key]) {
                            console.debug('No displayName mapping for:', key);
                        }
                        return API.columns.job[key];
                    }
                }
                */
            };

            details.activities = {
                payload: {},
                add: {
                    submit: function() {
                        switch(details.entity) {
                            case 'job':
                                details.activities.payload.job = $routeParams.jobId;
                            case 'zone':
                                details.activities.payload.zone = details.active.zone._id;
                            case 'area':
                                details.activities.payload.area = details.active.area._id;
                        }

                        console.log(details.entity, details.activities.payload);

                        API.add('activities', details.activities.payload).then(
                            details.activities.add.success,
                            details.activities.add.error
                        );
                    },
                    success: function(res) {
                        details.activities.payload = {};
                        details.active[details.entity].activities.push(res.data);

                        Dashboard.modal.notify({
                            text: 'Activity added successfully.',
                            status: 'alert-success'
                        });
                    },
                    error: details.debug.error,
                    modal: function() {
                        Dashboard.modal.open({
                            title: 'Add Activity',
                            template: 'activity',
                            class: ['small','scroll'],
                            data: { entity: 'activities' }
                        });
                    }
                },
                delete: {
                    submit: function(activity) {
                        console.debug("details.delete.activity", activity);
                        if( confirm('Are you sure you want to delete this activity?') ) {
                            API.delete('activities', activity._id).then(
                                details.activities.delete.success(activity),
                                details.activities.delete.error
                            );
                        }
                    },
                    success: function(activity) {
                        return function() {
                            var index = details.active[details.entity].activities.indexOf(activity);
                            details.active[details.entity].activities.splice(index, 1);
                        }
                    },
                    error: details.debug.error
                },
                edit: {
                    modal: function(activity) {
                        details.activities.payload.action = activity.action;
                        details.activities.payload.component = activity.component;
                        details.activities.payload.material = activity.material;
                        details.activities.payload.method = activity.method;

                        Dashboard.modal.open({
                            title: 'Edit Activity',
                            template: 'activity',
                            class: ['small','scroll'],
                            data: { entity: 'activities' }
                        });
                    }
                },
                toggle: function(field) {
                    details.activities.payload[field] = !details.activities.payload[field];
                },
                associate: {
                    action: function(item) {
                        if( item.actions.indexOf(details.activities.payload.action) > -1 ) {
                            return item;
                        }
                    },
                    component: function(item) {
                        if(
                            item.actions.indexOf(details.activities.payload.action) > -1
                            && item.components.indexOf(details.activities.payload.component) > -1
                        ) {
                            return item;
                        }
                    },
                    material: function(item) {
                        if(
                            item.actions.indexOf(details.activities.payload.action) > -1
                            && item.components.indexOf(details.activities.payload.component) > -1
                            && item.materials.indexOf(details.activities.payload.material) > -1
                        ) {
                            return item;
                        }
                    }
                }
            };

            details.zones = {
                payload: {},
                populate:['activities','areas','images','notes'],
                toggle: function(field) {
                    details.zones.payload[field] = !details.zones.payload[field];
                },
                add: {
                    submit: function() {
                        details.zones.payload.job = $routeParams.jobId;

                        API.add('zones', details.zones.payload).then(
                            details.zones.add.success,
                            details.zones.add.error
                        );
                    },
                    success: function(res) {
                        details.active.job.zones.push(res.data);

                        Dashboard.modal.notify({
                            text: 'Zone added successfully.',
                            status: 'alert-success'
                        });
                        details.zones.payload = {};
                    },
                    error: details.debug.error
                },
                edit: {
                    modal: function() {
                        Dashboard.modal.open({
                            title: 'Edit Zones',
                            template: 'zone',
                            class: ['small','scroll'],
                            data: { entity: 'zones' }
                        });
                    },
                    submit: function(zone) {
                        console.log(zone);
                        API.edit('zones', zone._id, zone).then(
                            details.zones.edit.success,
                            details.zones.edit.error
                        );
                    },
                    success: function(res) {
                        Dashboard.modal.notify({
                            text: 'Zone updated successfully.',
                            status: 'alert-success'
                        });
                    },
                    error: details.debug.error
                },
                delete: {
                    submit: function(id, $index) {
                        console.debug(id, $index);

                        if (confirm('Are you sure you want to delete this zone?')) {
                            API.delete('zones', id).then(
                                details.zones.delete.success($index),
                                details.zones.delete.error
                            );
                        }
                    },
                    success: function($index) {
                        return function() {
                            details.active.job.zones.splice($index, 1);
                        }
                    },
                    error: details.debug.error
                }
            };

            details.areas = {
                payload: {},
                populate:['activities','images','notes'],
                edit: {
                    modal: function() {
                        Dashboard.modal.open({
                            title: 'Edit Areas',
                            template: 'area',
                            class: ['small','scroll'],
                            data: {
                                entity: 'areas'
                            }
                        });
                    }
                },
                add: {
                    submit: function() {
                        details.areas.payload.job = $routeParams.jobId;
                        details.areas.payload.zone = details.active.zone._id;
                        console.log(details.areas.payload);

                        API.add('areas', details.areas.payload).then(
                            details.areas.add.success,
                            details.areas.add.error
                        );
                    },
                    success: function(res) {
                        details.active.zone.areas.push(res.data);

                        Dashboard.modal.notify({
                            text: 'Area added successfully.',
                            status: 'alert-success'
                        });
                        details.areas.payload = {};
                    },
                    error: details.debug.error
                },
                delete: {
                    submit: function(id, $index) {
                        console.debug(id, $index);

                        if (confirm('Are you sure you want to delete this area?')) {
                            API.delete('areas', id).then(
                                details.areas.modal.delete.success($index),
                                details.areas.modal.delete.error
                            );
                        }
                    },
                    success: function($index) {
                        return function() {
                            details.active.zone.areas.splice($index, 1);

                            Dashboard.modal.notify({
                                text: 'Area deleted successfully.',
                                status: 'alert-success'
                            });
                        }
                    },
                    error: details.debug.error
                }
            };

            details.notes = {
                payload: {},
                add: {
                    submit: function(entity, id) {
                        if( details.notes.payload.text ) {
                            details.notes.payload[entity] = id;

                            console.debug('Created note for:', entity);

                            API.add('notes', details.notes.payload).then(
                                details.notes.add.success(entity),
                                details.notes.add.error
                            );
                        }
                    },
                    success: function(entity) {
                        return function(res) {
                            console.debug('Created note for:', entity, res.data);
                            details.notes.payload = {};
                            details.active[entity].notes.push(res.data);
                        }
                    },
                    error: details.debug.error
                },
                delete: {
                    submit: function(entity, note) {
                        if (confirm('Are you sure you want to delete this note?')) {
                            API.delete('notes', note._id).then(
                                details.notes.delete.success(note),
                                details.notes.delete.error
                            );
                        }
                    },
                    success: function(note) {
                        return function() {
                            var index = details.active[details.entity].notes.indexOf(note);
                            details.active[details.entity].notes.splice(index, 1);
                        }
                    },
                    error: details.debug.error
                }
            };

            details.images = {
                payload: {},
                select: function() {
                    details.images.payload[details.entity] = details.active[details.entity]._id;
                },
                add: {
                    submit: function(entity) {
                        // return console.debug(details.images.payload);
                        console.log("Submit image function should fire", details.images.payload)
                        API.upload('images', details.images.payload).then(
                            details.images.add.success(entity),
                            details.images.add.error
                        );
                    },
                    success: function(entity) {
                        return function(res) {
                            console.log("Added an image for:", entity, res.data);
                            // console.debug('Added an image for:', entity, res.data);
                            details.images.payload = {};
                            details.active[entity].images.push(res.data);
                        }
                    },
                    error: details.debug.error
                },
                delete: {
                    submit: function(image) {
                        // return console.log($index);
                        if (confirm('Are you sure you want to delete this image?')) {
                            API.delete('images', image._id).then(
                                details.images.delete.success(image),
                                details.images.delete.error
                            );
                        }
                    },
                    success: function(image) {
                        return function() {
                            var index = details.active[details.entity].images.indexOf(image);
                            details.active[details.entity].images.splice(index, 1);
                        }
                    },
                    error: details.debug.error
                }
            };

            if (window.debug) {
                window.details = details;
            }
        }
    ]);
