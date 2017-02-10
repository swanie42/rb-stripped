var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
module.exports = (config, callback) => {
    mongoose.connect('mongodb://localhost/'.concat(config.name), ( error ) => {
        if( error ) {
            console.error('ERROR starting mongoose!', error);

            if( callback ) {
                callback(error)
            } else {
                process.exit(128);
            }
        } else {
            console.info('Mongoose connected to MongoDB successfully'.yellow);

            if( callback ) {
                callback(null);
            }
        }
    });
};
