var Image = require('../models/image'),
    config = require('../config.js'),
    s3 = require('s3'),
    s3Client = s3.createClient({
        s3Options: {
            accessKeyId: config.KEY_ID,
            secretAccessKey: config.SECRET
        }
    });

module.exports = {
    upload: (req, res) => {
        // console.info("[INFO] image payload:".cyan.bold, req.files, req.body);
        if( !req.files && !req.files.images ) {
            return res.status(400).send({ message: 'Malformed request!' });
        }

        var images = req.files.images;
        var imagesArray = [];
        images.forEach(function(image){
            var filename = Date.now() + "_" + image.name,
            uploader = s3Client.uploadFile({
                localFile: image.path,
                s3Params: {
                    Bucket: 'readyboardpics',
                    Key: filename,
                    ACL: 'public-read'
                }
            });

            uploader.on('progress', () => {
                console.log(
                    "Progress",
                    uploader.progressAmount,
                    uploader.progressTotal,
                    ((uploader.progressAmount/uploader.progressTotal)*100) +'%'
                );
            });

            uploader.on('end', () => {
                var imgUrl = s3.getPublicUrlHttp('readyboardpics', filename);

                console.log('Saving New Image URL:', imgUrl);

                var copyOfBody = Object.assign({}, req.body);
                copyOfBody.url = imgUrl;

                new Image(copyOfBody).save((err, image) => {
                    imagesArray.push(image);

                    if( err ) {
                        console.log('ERROR updating images upload:', err);
                    }

                    if (imagesArray.length === images.length){
                        res.send(imagesArray);
                    }
                });
            });

        })

    }
};
