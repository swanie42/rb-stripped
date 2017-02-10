require('colors');

var Models = require('../../models'),
    Database = require('../../database'),
    Config = require('../../package'),
    Scope = Models.scopes,
    Job = Models.jobs;

var Populate = {
    write: (args) => {
        Job.find({}, (err, jobs) => {
            if(!err) {
                jobs.forEach((job, index) => {
                    new Scope({
                        job: job.id,
                        name: `Scope ${index}`
                    }).save((err, scope) => {
                        if(!err) {
                            console.log('Created scope:'.bold.green, scope);
                        } else {
                            console.error(err);
                        }
                        if(jobs.length-1 === index) {
                            process.exit();
                        }
                    });
                });
            } else {
                console.error(err);
            }
        });
    },
    update:(args) => {
        Job.collection.update({}, {
            $unset: {
                defaultActivities: true,
                activities: true,
                zones: true,
                areas: true,
                notes: true,
                images: true,
                scopes: true
            }
        }, {
            multi: true,
            safe: true
        }, (err, result) => {
            if( err ) {
                console.error('Could not update!', err);
                process.exit(1);
            } else {
                console.log('Updated!', result);
                process.exit(0);
            }
        });
    }
};

Database(Config, (err) => {
    if(err) {
        console.error(err);
    } else {
        var args = require('yargs').argv;

        if( args.run && Populate[args.run] ) {
            console.info('Script yargs'.bold);
            console.dir(args);
            Populate[args.run](args);
        } else {
            console.error('\n','Invalid arguments for this script!');
            process.exit(1);
        }
    }
});
