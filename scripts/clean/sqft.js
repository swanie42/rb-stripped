'use script';

require('colors');

var argv = require('yargs').argv,
    // async = require('async'),
    Models = require('../../models');

var Script = {
    sqft: () => {
        Models.jobs
        .find({})
        .exec((err, jobs) => {
            jobs.forEach((job, index) => {
                var parsedNnum = parseInt(job.approxSqFt.replace(/\D/g,'')||0);
                // console.log(parsedNnum, job.approxSqFt)

                job.update({ sqft: parsedNnum }, (err) => {
                    if( err ) {
                        console.error(err);
                    }
                    if( jobs.length-1 === index ) {
                        process.exit(0);
                    }
                });
            })
        });
    }
};

function start() {
    //--run populate
    if (Script[argv.run]) {
        console.log('[activities.script][running]:'.cyan, argv.run);
        Script[argv.run](argv);
    } else {
        console.log('Unknown command for --run:', argv.run);
        process.exit(0);
    }
}

require('../../database')(require('../../package'), start);
