require('colors');

var Models = require('../../models'),
    Database = require('../../database'),
    Config = require('../../package'),
    Image = Models.images,
    Job = Models.jobs;

var Populate = {
    run: function(args) {
        console.info("args:", args);

        Job.find({}, (err, jobs) => {
            if(!err) {
                jobs.forEach(Populate.write);
            } else {
                console.error(err);
            }
        });
    },
    write: function(job, index, jobs) {
        new Image({
            job: job._id,
            url: job.img
        }).save((err, image) => {
            if(!err) {
                console.log('Created image:'.bold.green, image);
            } else {
                console.error(err);
            }
            if(jobs.length-1 === index) {
                process.exit();
            }
        });
    }
};

Database(Config, (err) => {
    if(err) {
        console.error(err);
    } else {
        Populate.run(require('yargs').argv);
    }
});
