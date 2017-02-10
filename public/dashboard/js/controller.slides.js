angular.module('module.dashboard').controller('controller.slides', [
    '$scope',
    '$rootScope',
    'factory.api',
    'factory.modal',
    function($scope, $rootScope, API, Modal) {
        var slides = this;

        slides.payload = {
            sort: '-created'
        };

        slides.init = function(entity) {
            if(entity.slice(-1) === 's') {
                entity = entity.slice(0,-1);
            }

            slides.entity = entity;

            slides.payload[entity] = $rootScope.active[entity]._id;

            console.log('INIT SLIDES', slides.payload);

            API.list('images', slides.payload)
                .then(slides.list.success, API.debug.error);
        };

        slides.select = function() {
            console.log("select fired!");
        };

        slides.list = {
            success: function(res) {
                slides.data = res.data;
            }
        };

        slides.add = {
            submit: function() {
                API.upload('images', slides.payload)
                    .then(slides.add.success, API.debug.error);

            },
            success: function(res) {
                console.debug('Created image for:', res.data);
                slides.data = res.data.concat(slides.data);
                // slides.data.unshift(res.data);
                slides.resetPayload();
                console.log('this is the response Images', res.data)
            }
        };

        slides.edit ={
            submit: function() {
                API.edit('images', slides.data[$scope.active]._id, slides.data[$scope.active])
                    .then(function(){
                        console.log('You added a caption');
                    }, API.debug.error);

            }
        };

        slides.delete = {
            submit: function() {
                if (slides.data.length === 0){
                    return alert("no images");
                }

                if (confirm('Are you sure you want to delete this image?')) {
                    var params;
                    var activeImage = slides.data[$scope.active]||{};
                    var activeImageUrl = activeImage.url;
                    var defaultImage = $rootScope.active[slides.entity];
                    var defaultImageUrl = defaultImage.img;
                    var url = slides.data[$scope.active].url;
                    var firstPicInArray = slides.data[0].url



                    if (activeImageUrl === defaultImageUrl){
                        params = { img: firstPicInArray };
                        params[slides.entity] = defaultImage._id;
                    }

                    API.delete('images', activeImage._id, params).then(function() {
                        console.log('SLIDES DATA',slides.data);
                        slides.data.splice($scope.active, 1);
                        slides.default.submit();


                    }, API.debug.error);
                }

            }
        };

        slides.default = {

            submit: function() {

                console.debug('controller.slides.default.submit:', slides.data, slides.payload);
                if (!slides.data.length){
                    $rootScope.active.img = '//placehold.it/600x400';
                }else{
                    var url = slides.data[$scope.active].url;
                    API.edit(
                        API.entity(slides.entity),
                        slides.payload[slides.entity],
                        { img: url }
                    ).then(function(res) {
                        console.log('controller.slides.submit.success:', slides.entity, res.data);

                            $rootScope.active.img = url

                        console.log('DEFAULT IMAGE:', url)

                    }, API.debug.error);
                }
            }
        };

        slides.closeModal = function() {
            slides.resetPayload();
            Modal.reset.all();
        };

        slides.resetPayload = function() {
            slides.payload.caption = '';
            slides.payload.image = undefined;
        }

        $('#modal').on('hide.bs.modal', slides.closeModal);
    }
]);
